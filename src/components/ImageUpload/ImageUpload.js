import React, { useState, useRef } from 'react'
import { FormButton, Input } from '../GlobalStyles/FormStyles'
import styled from 'styled-components'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { ModalBox, ModalContainer } from '../GlobalStyles/ModalStyles';
import { ButtonsContainer } from '../../pages/Auth/ModuleStyles';
import BlankImg from "../../assets/hotel.png"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-hot-toast';
import imageCompression from 'browser-image-compression';

// Helper function to convert Data URL to File object
function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

const UploadContainer = styled.div`
    margin-bottom: 20px;
    background: #e2e2e2;
    border-radius: 4px;
    overflow: hidden;
`

const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px;
`

const ImageContainer = styled.div`
    overflow: hidden;
    cursor: pointer;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 4px;
    background: #fff;
    &.selected{
        border: 2px solid #ff6e29;
    }
    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
    .delete-icon{
        position: absolute;
        bottom: 5px;
        right: 5px;
        background: white;
        padding: 4px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.1);
            background: #ff6e29;
            color: white;
        }
    }
    .progress-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
`

const DropZone = styled.div`
    border: 2px dashed #ccc;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    background: #f8f8f8;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        border-color: #ff6e29;
        background: #fff;
    }
    &.drag-active {
        border-color: #ff6e29;
        background: #fff5f0;
    }
`

const ImageUpload = ({ 
    setImageURL, 
    imageUrl, 
    data, 
    styles, 
    setSelected, 
    selected,
    maxImages = 5,
    maxSize = 5, // MB
    allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
}) => {
    const fileInput = useRef(null)
    const [src, setSrc] = useState(imageUrl || BlankImg);
    const [popup, setPopup] = useState(false);
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({
        unit: 'px',
        x: 130,
        y: 50,
        width: 160,
        height: 90,
        aspect: 16 / 9
    });
    const [preview, setPreview] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({});

    const validateFile = (file) => {
        // 检查文件类型
        if (!allowedTypes.includes(file.type)) {
            toast.error(`不支持的文件类型。支持的类型: ${allowedTypes.join(', ')}`);
            return false;
        }

        // 检查文件大小
        if (file.size > maxSize * 1024 * 1024) {
            toast.error(`文件大小不能超过 ${maxSize}MB`);
            return false;
        }

        return true;
    }

    const compressImage = async (file) => {
        const options = {
            maxSizeMB: maxSize,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        }

        try {
            const compressedFile = await imageCompression(file, options);
            return compressedFile;
        } catch (error) {
            console.error('图片压缩失败:', error);
            return file;
        }
    }

    const handleFile = async (file) => {
        if (!validateFile(file)) return;

        setUploadProgress({ [file.name]: 0 });
        
        try {
            const compressedFile = await compressImage(file);
            setSrc(URL.createObjectURL(compressedFile));
            setPopup(true);
            
            // 模拟上传进度
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                setUploadProgress(prev => ({
                    ...prev,
                    [file.name]: progress
                }));
                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setUploadProgress(prev => {
                            const newProgress = { ...prev };
                            delete newProgress[file.name];
                            return newProgress;
                        });
                    }, 1000);
                }
            }, 100);
        } catch (error) {
            toast.error('文件处理失败: ' + error.message);
        }
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    }

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
    }

    const getCroppedImg = (e) => {
        e.preventDefault();
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        setPreview(base64Image);
        setImageURL(dataURLtoFile(base64Image, 'cropped.jpg'));
        setPopup(false);
    }

    return (
        <UploadContainer>
            {popup && (
                <ModalContainer>
                    <ModalBox>
                        {src && (
                            <>
                                <ReactCrop
                                    src={src}
                                    onImageLoaded={setImage}
                                    crop={crop}
                                    onChange={setCrop}
                                    style={{ maxHeight: '70vh' }}
                                />
                                <ButtonsContainer>
                                    <FormButton onClick={() => setPopup(false)}>
                                        取消
                                    </FormButton>
                                    <FormButton onClick={getCroppedImg}>
                                        裁剪并上传
                                    </FormButton>
                                </ButtonsContainer>
                            </>
                        )}
                    </ModalBox>
                </ModalContainer>
            )}

            <ImageGrid>
                {Array.from({ length: maxImages }).map((_, index) => (
                    <ImageContainer
                        key={index}
                        className={selected?.includes(data?.uuid) ? 'selected' : ''}
                        onClick={() => !imageUrl && fileInput.current.click()}
                    >
                        {preview || imageUrl ? (
                            <>
                                <img src={preview || imageUrl} alt="" />
                                <DeleteOutlineIcon
                                    className="delete-icon"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelected?.(data?.uuid);
                                    }}
                                />
                            </>
                        ) : (
                            <DropZone
                                className={dragActive ? 'drag-active' : ''}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                            >
                                <p>点击或拖拽图片到此处</p>
                                <small>支持 JPG, PNG, WebP (最大 {maxSize}MB)</small>
                            </DropZone>
                        )}
                        {uploadProgress[`image-${index}`] !== undefined && (
                            <div className="progress-overlay">
                                {uploadProgress[`image-${index}`]}%
                            </div>
                        )}
                    </ImageContainer>
                ))}
            </ImageGrid>

            <Input
                type="file"
                accept={allowedTypes.join(',')}
                onChange={(e) => handleFile(e.target.files[0])}
                style={{ display: 'none' }}
                ref={fileInput}
            />
        </UploadContainer>
    )
}

export default ImageUpload
