import React, { useState, useRef, ChangeEvent, useCallback } from 'react';
import styled from 'styled-components';
import { Crop, PixelCrop } from 'react-image-crop';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { FormButton, Input } from '../GlobalStyles/FormStyles';

const UploadContainer = styled.div`
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    margin: 20px 0;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        border-color: #666;
    }
`;

const ImagePreview = styled.div`
    position: relative;
    display: inline-block;
    margin: 10px;
    
    img {
        max-width: 200px;
        max-height: 200px;
        object-fit: cover;
    }
`;

const DeleteButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background: rgba(255, 255, 255, 1);
    }
`;

interface ImageFile extends File {
    preview?: string;
    progress?: number;
}

interface ImageUploadProps {
    onImagesSelected: (files: ImageFile[]) => void;
    maxImages?: number;
    maxSize?: number; // in MB
    allowedTypes?: string[];
}

interface ErrorState {
    type: 'error' | 'warning';
    message: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onImagesSelected,
    maxImages = 5,
    maxSize = 5,
    allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
}): React.ReactElement => {
    const [selectedImages, setSelectedImages] = useState<ImageFile[]>([]);
    const [errors, setErrors] = useState<ErrorState[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [currentCrop, setCurrentCrop] = useState<Crop>({
        unit: 'px',
        x: 0,
        y: 0,
        width: 100,
        height: 100
    });
    const [currentImage, setCurrentImage] = useState<HTMLImageElement | null>(null);
    const [imageUrl, setImageUrl] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const validateFile = (file: File): ErrorState | null => {
        if (!allowedTypes.includes(file.type)) {
            return {
                type: 'error',
                message: `File type ${file.type} is not supported`
            };
        }

        if (file.size > maxSize * 1024 * 1024) {
            return {
                type: 'error',
                message: `File size exceeds ${maxSize}MB limit`
            };
        }

        if (selectedImages.length >= maxImages) {
            return {
                type: 'error',
                message: `Maximum ${maxImages} images allowed`
            };
        }

        return null;
    };

    const handleCropImage = async (image: HTMLImageElement, crop: PixelCrop): Promise<File | null> => {
        if (!crop || !crop.width || !crop.height) return null;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
            throw new Error('No 2d context');
        }

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        canvas.width = crop.width;
        canvas.height = crop.height;

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve) => {
            canvas.toBlob(
                (blob) => {
                    if (!blob) {
                        resolve(null);
                        return;
                    }
                    resolve(new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' }));
                },
                'image/jpeg',
                1
            );
        });
    };

    const handleCropComplete = useCallback((crop: Crop, percentageCrop: Crop) => {
        if (!currentImage || !currentImage.complete || currentImage.naturalWidth === 0) {
            console.error("Image not fully loaded or invalid for cropping.");
            return; 
        }
        
        if (!crop.width || !crop.height) {
            console.warn("Invalid crop dimensions received.");
            return;
        }

        const pixelCrop: PixelCrop = {
            unit: 'px',
            x: Math.round((crop.x / 100) * currentImage.naturalWidth),
            y: Math.round((crop.y / 100) * currentImage.naturalHeight),
            width: Math.round((crop.width / 100) * currentImage.naturalWidth),
            height: Math.round((crop.height / 100) * currentImage.naturalHeight)
        };
        
        handleCropImage(currentImage, pixelCrop);
    }, [currentImage, handleCropImage]);

    const handleImageSelect = useCallback(async (file: File) => {
        const error = validateFile(file);
        if (error) {
            setErrors(prev => [...prev, error]);
            return;
        }

        const url = URL.createObjectURL(file);
        setImageUrl(url);

        const img = new Image();
        img.src = url;

        try {
            await new Promise<void>((resolve, reject) => {
                img.onload = () => {
                    setCurrentImage(img);
                    resolve();
                };
                img.onerror = () => {
                    setErrors(prev => [...prev, {
                        type: 'error',
                        message: '加载图片失败'
                    }]);
                    reject();
                };
            });
        } catch (err) {
            console.error("Error loading image:", err);
            // Optionally revoke URL if image fails to load
            // URL.revokeObjectURL(url);
            // setImageUrl('');
        }

    }, [validateFile]);

    const handleDrop = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            await handleImageSelect(files[0]);
        }
    }, [handleImageSelect]);

    const handleFileInput = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            await handleImageSelect(files[0]);
        }
    }, [handleImageSelect]);

    return (
        <UploadContainer
            onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsDragging(true);
            }}
            onDragLeave={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsDragging(false);
            }}
            onDrop={handleDrop}
            style={{ 
                borderColor: isDragging ? '#ff6e29' : '#ccc',
                background: isDragging ? '#fff5f0' : '#f8f8f8'
            }}
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInput}
                accept={allowedTypes.join(',')}
                style={{ display: 'none' }}
                aria-label="Select Image File"
            />
            {imageUrl ? (
                <ReactCrop
                    src={imageUrl}
                    crop={currentCrop}
                    onChange={(c: Crop) => setCurrentCrop(c)}
                    onComplete={handleCropComplete}
                />
            ) : (
                <div onClick={() => fileInputRef.current?.click()}>
                    <p>点击或拖拽图片到此处上传</p>
                    <small>支持的格式: {allowedTypes.map(type => type.split('/')[1]).join(', ')}</small>
                    <br />
                    <small>最大文件大小: {maxSize}MB</small>
                </div>
            )}
            {selectedImages.map((image, index) => (
                <ImagePreview key={index}>
                    <img src={image.preview} alt={`Preview ${index + 1}`} />
                    <DeleteButton 
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImages(prev => prev.filter((_, i) => i !== index));
                            URL.revokeObjectURL(image.preview || '');
                        }}
                    >
                        <DeleteOutlineIcon />
                    </DeleteButton>
                </ImagePreview>
            ))}
        </UploadContainer>
    );
};

export default ImageUpload; 