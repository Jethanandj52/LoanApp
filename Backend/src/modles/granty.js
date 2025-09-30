const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const guarantorSchema = new Schema({
  loanId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Loan',    // Loan model se reference
    required: true 
  },
  name: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 3 
  },
  email: { 
    type: String, 
    required: true, 
    lowercase: true,
    trim: true,
    validate: {
      validator: function(v) {
        return validator.isEmail(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  location: { 
    type: String, 
    required: true,
    trim: true
  },
  cnic: { 
    type: String, 
    required: true, 
    minlength: 13, 
    maxlength: 13,
    validate: {
      validator: function(v) {
        // CNIC should be exactly 13 digits
        return /^\d{13}$/.test(v);
      },
      message: props => `${props.value} is not a valid CNIC! Must be 13 digits.`
    }
  }
}, { timestamps: true });

const Guarantor = mongoose.model('Guarantor', guarantorSchema, "guarantor");

module.exports = Guarantor;
