const Employee = require('./../models/employeeModel');

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json({
            status: 'success',
            results: employees.length,
            data: {
                employees
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Invalid employees!'
        })
    }
};

exports.getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                employee
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Invalid employee!'
        })
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                employee: newEmployee
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Invalid data sent!'
        })
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                employee
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Invalid data sent!'
        })
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Invalid employee!'
        })
    }
};
