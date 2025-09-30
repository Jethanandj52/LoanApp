const express = require('express');
const mongoose = require('mongoose');
const Loan = require('../modles/loans'); // yahan tum Loan schema ka path do
const Guarantor = require('../modles/granty');
const loanRouter = express.Router();

// Loan Apply API
loanRouter.post('/apply', async (req, res) => {
  try {
    const { userId, loanCategory, amount, durationMonths, purpose } = req.body;

    // Validation check
    if (!userId || !loanCategory || !amount || !durationMonths || !purpose) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Loan create
    const loan = new Loan({
      userId,
      loanCategory,
      amount,
      durationMonths,
      purpose
    });

    await loan.save();
    res.status(201).json({
      message: "Loan application submitted successfully",
      loan
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

loanRouter.get('/adminLoanDetail', async (req, res) => {
  try {
    // Step 1: Loan ke sare records fetch karo, user details ke sath
    const loans = await Loan.find()
      .populate('userId', 'name email cnic url')  // user ki selected fields
      .populate({
        path: 'guarantors', // virtual field from Loan schema
        select: 'name email location cnic' // guarantor ke fields
      });

    res.status(200).json({
      message: 'All loan applications with user and guarantor details fetched successfully',
      loans
    });
  } catch (error) {
    console.error('Error fetching loan details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



loanRouter.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const loans = await Loan.find({ userId: id })
      .populate('userId', 'name email cnic')    // user ki kuch fields populate karo
      .populate('guarantors');                   // guarantors virtual field populate karo

    if (loans.length === 0) {
      return res.status(404).json({ message: "Is user ke koi loans nahi hain" });
    }

    res.status(200).json({
      message: `Loans for user ${id} fetched successfully`,
      loans
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// Approve loan
loanRouter.patch('/approve/:id', async (req, res) => {
  try {
    const { id } = req.params; // yeh userId ya loanId ho sakta hai
    const { status,approvedBy } = req.body; // user se status ka input le rahe ho

    const updatedLoan = await Loan.findOneAndUpdate(
      { userId: id }, // Agar tum userId ke basis pe update kar rahe ho
      { status, approvedBy },
      { new: true } // updated document wapas dega
    );

    if (!updatedLoan) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    res.status(200).json({
      message: 'Loan status updated successfully',
      updatedLoan
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

loanRouter.delete("/deleteLoan/:id", async (req, res) => {
  try {
    const loan = await Loan.findByIdAndDelete({_id:req.params.id});

    if (!loan) {
      return res.status(404).json({ message: "Loan not found" });
    }

    res.json({ message: "Loan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = loanRouter;
