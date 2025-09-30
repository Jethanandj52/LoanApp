const express = require('express');
const guarantorRouter = express.Router();
const Guarantor = require('../modles/granty'); // guarantor schema
const Loan = require('../modles/loans');        // loan schema
const mongoose = require('mongoose');

guarantorRouter.post('/register', async (req, res) => {
  try {
    const { loanId, name, email, location, cnic } = req.body;

    if (!loanId) {
      return res.status(400).json({ message: 'LoanId zaroori hai' });
    }

    if (!mongoose.Types.ObjectId.isValid(loanId)) {
      return res.status(400).json({ message: 'Invalid loanId format' });
    }

    // DB me loan existence check karo
    const loanExists = await Loan.findById(loanId);
    if (!loanExists) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    if (!name || !email || !location || !cnic) {
      return res.status(400).json({ message: 'Sab fields fill karen' });
    }

    const guarantor = new Guarantor({
      loanId,
      name,
      email,
      location,
      cnic
    });

    await guarantor.save();

    res.status(201).json({ message: 'Guarantor successfully added', guarantor });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = guarantorRouter;
