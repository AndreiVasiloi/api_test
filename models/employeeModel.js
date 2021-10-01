const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'An employee must have a name']
    },
    age: Number
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
