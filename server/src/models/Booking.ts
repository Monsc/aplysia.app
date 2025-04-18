import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date,
    required: true
  },
  roomNumbers: [{
    type: String,
    required: true
  }],
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  paid: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    required: true
  },
  people: {
    adults: {
      type: Number,
      required: true
    },
    children: {
      type: Number,
      default: 0
    }
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true
  },
  paymentId: {
    type: String
  },
  paymentDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export default mongoose.model('Booking', bookingSchema); 