const mongoose = require('mongoose');
const { Schema } = mongoose;

const loanSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  loanCategory: { type: String, required: true },
  amount: { type: Number, required: true },
  durationMonths: { type: Number, required: true },
  purpose: { type: String, required: true},
  status: { type: String, default: "Pending" },
  approvedBy: { type: String, default: null },
  approvedDate: { type: Date, default: null },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual populate for guarantors (ek loan ke multiple guarantors honge)
loanSchema.virtual('guarantors', {
  ref: 'Guarantor',      // Guarantor model ka naam
  localField: '_id',     // Loan model ka primary key
  foreignField: 'loanId' // Guarantor model me jo field Loan ko refer karta hai
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
