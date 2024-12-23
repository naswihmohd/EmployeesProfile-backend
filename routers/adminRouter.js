const express = require('express')
const adminController = require ('../controllers/adminController')

const router = express.Router()
router.use(express.json())


router.get('/',adminController.getAllEmployees)
router.post('/addEmployee',adminController.addEmployee)
router.delete('/deleteEmployee/:id',adminController.deleteEmployee)
router.put('/update/:id',adminController.updateEmployee)


module.exports = router