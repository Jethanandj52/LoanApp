const express = require('express');
const appointmentRouter = express.Router();
const Appointment = require('../modles/appoinment');  // spelling check
const { User } = require('../modles/user');
const Loan = require('../modles/loans');  // missing import

// Create new appointment
appointmentRouter.post('/create', async (req, res) => {
  try {
    const { userId, loanId, appointmentDate, appointmentTime, tokenNumber, qrCode } = req.body;

    if (!userId || !loanId || !appointmentDate || !appointmentTime || !tokenNumber) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }

    const loanExists = await Loan.findById(loanId);
    if (!loanExists) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    const appointment = new Appointment({
      userId,
      loanId,
      appointmentDate,
      appointmentTime,
      tokenNumber,
      qrCode
    });

    await appointment.save();

    res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// ... baki routes waise hi sahi hain

 


// 2. Get all appointments (for admin or listing)
appointmentRouter.get('/all', async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('userId', 'name email cnic')
      .populate('loanId', 'loanCategory amount status');

    res.status(200).json({ message: 'Appointments fetched successfully', appointments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// 3. Get appointments for a user (by userId)
appointmentRouter.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const appointments = await Appointment.find({ userId })
      .populate('loanId', 'loanCategory amount status');

    res.status(200).json({ message: 'User appointments fetched successfully', appointments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// 4. Update appointment status (e.g., mark as Completed or Cancelled)
appointmentRouter.patch('/update-status/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['Scheduled', 'Completed', 'Cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const appointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment status updated', appointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// 5. Delete an appointment
appointmentRouter.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = appointmentRouter;
