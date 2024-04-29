const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  admissionDate: {
    type: Date,
    required: true
  },
  dischargeDate: {
    type: Date
  },
  diagnosis: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Admission', admissionSchema);
