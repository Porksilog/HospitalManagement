const express = require('express');
const router = express.Router();
const admissionController = require('../controllers/admissionController');

// Create a new admission
router.post('/', admissionController.createAdmission);

// Read all admissions
router.get('/', admissionController.getAllAdmissions);

// Update an admission
router.patch('/:id', admissionController.updateAdmission);

// Delete an admission
router.delete('/:id', admissionController.deleteAdmission);

module.exports = router;
