const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Create a new doctor
router.post('/', doctorController.createDoctor);

// Read all doctors
router.get('/', doctorController.getAllDoctors);

// Update a doctor
router.patch('/:id', doctorController.updateDoctor);

// Delete a doctor
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
