const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const upload = require('../middlewares/upload');

// ROUTES:

// For flat exports (Create, Update, Delete)
router.post('/import', upload.single('file'), carController.importCarsFromCSV)
router.post('/', carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);
// FOR 'READ' OBJECT: Notice the added ".read" in the middle!
router.get('/', carController.read.getAllCars);
router.get('/:id', carController.read.getCarByID);

module.exports = router;