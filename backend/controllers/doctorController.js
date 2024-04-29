const Doctor = require('../models/doctor');

// Create a new doctor
const createDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).send(doctor);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Read all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.send(doctors);
  } catch (error) {
    res.status(500).send();
  }
};

// Update a doctor
const updateDoctor = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['lastName', 'firstName', 'speciality', 'active'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!doctor) {
      return res.status(404).send();
    }

    res.send(doctor);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a doctor
const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!doctor) {
      return res.status(404).send();
    }

    res.send(doctor);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  createDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor
};
