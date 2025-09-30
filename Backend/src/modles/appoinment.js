const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  loanId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Loan', 
    required: true 
  },
  appointmentDate: { 
    type: Date, 
    required: true 
  },
  appointmentTime: { 
    type: String,  // e.g. "10:30 AM" ya "15:00"
    required: true 
  },
  tokenNumber: { 
    type: Number,   // queue me position ya token number
    required: true,
    unique: true    // har token unique ho
  },
  qrCode: { 
    type: String,  // agar QR code ka base64 string ya URL store karna ho
    required: false
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled'
  }
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema, 'appointments');

module.exports = Appointment;
