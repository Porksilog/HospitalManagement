const Admission = require('../models/admission');

// Create a new admission
const createAdmission = async (req, res) => {
  try {
    const admission = new Admission(req.body);
    await admission.save();
    res.status(201).send(admission);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Read all admissions
const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find({});
    res.send(admissions);
  } catch (error) {
    res.status(500).send();
  }
};

// Update an admission
const updateAdmission = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['admissionDate', 'dischargeDate', 'diagnosis'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const admission = await Admission.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!admission) {
      return res.status(404).send();
    }

    res.send(admission);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an admission
const deleteAdmission = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndDelete(req.params.id);

    if (!admission) {
      return res.status(404).send();
    }

    res.send(admission);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  createAdmission,
  getAllAdmissions,
  updateAdmission,
  deleteAdmission
};
