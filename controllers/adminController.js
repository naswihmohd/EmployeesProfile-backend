const employModel = require('../models/employeeModel')


module.exports.addEmployee = async (req, res) => {
    await employModel.create(req.body).then(() => {
        res.json({ message: 'employ details added' })
    })
}

module.exports.getAllEmployees = async (req, res) => {
    const employees = await employModel.find()
    res.json(employees)
}

module.exports.deleteEmployee = async (req, res) => {
    const {id} = req.params
    await employModel.findByIdAndDelete(id).then(()=>{
        res.json({message:'deleted'})
    })
}

module.exports.updateEmployee = async (req,res)=>{
    const {id} = req.params
    await employModel.findByIdAndUpdate(id,req.body).then(()=>{
        res.json({message:'updated'})
    })
}