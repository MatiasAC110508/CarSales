const db = require('../config/db');

// CREATE: Add a new car to the inventory
exports.createCar = async (req, res) => {
    try {
        // 1. Extract data from the incoming request body
        const { unique_plate, make, model, color, mileage} = req.body;

        // 2. Write the SQL query using '?' placeholders for security (prevents SQL Injection)
        const query = `INSERT INTO autos (unique_plate, make, model, color, mileage) VALUES (?, ?, ?, ?, ?)
        `;

        // 3. Execute the query using the db pool
        const [result] = await db.query(query, [unique_plate, make, model, color, mileage]);

        // 4. Send a success response back to the client
        res.status(201).json({
            message: 'Car registered successfully',
            carId: result.insretId
        });
    } catch (error) {
        console.error(error);
        // Handle duplicate plate error (MySQL error code ER_DUP_ENTRY)
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'A car with plate already exists.' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

// READ: Create a object of funcitons of reading

exports.read = {
    // READ: Get all cars form the inventory
    getAllCars:
        async (req, res) => {
            try {
                const query = 'SELECT * FROM cars';
                const [rows] = await db.query(query);  // Destructuring
                
                res.status(200).json(rows);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
        },
    getCarByID:
        // READ: Get specific car by its unique ID
        async (req, res) => {
            try {
                const carId = req.params.id;    // Extract the ID from the URL (/api/cars/5)
                const query = 'SELECT * FROM cars WHERE id_auto = ?';

                const [rows] = await db.query(query, [carId]);

                // If the array is empty, the car doesn't exist
                if (rows.length === 0) {
                    return res.status(404).json({ message: 'Car not found' });
                }

                // Return the first (and only) object in the array
                res.status(200).json(rows[0]);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });        
            }
        }
};

// UPDATE: Update technical info of the car (e.g., color and mileage)
exports.updateCar = async (req, res) => {
    try {
        const carId = req.params.id;
        const {color, mileage } = req.body;

        const query = 'UPDATE autos SET color = ?, milage = ? WHERE id_auto = ?';
        const [result] = await db.query(query, [color, mileage, carId]);

        // affectedRows tells us if the ID actually existed in the database
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Car not found or no changes made' });
        }

        res.status(200).json({ message: 'Car updated successfully' });
    } catch (error) {
        console.error(error);
            res.status(500).json({ error: 'Internal server error' });
    }
};

// DELETE: Remove a car physically, validating dependencies
exports.deleteCar = async (req, res) => {
    try {
        const carId = req.params.id;
        const query = 'DELETE FROM autos WHERE id_auto = ?';

        const [result] = await db.query(query, [carId]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Car not found' });
        }

        return res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
        console.error(error);
        // This is where we catch the Foreign Key constraint error!
        if (error.code === 'ER_ROW_IS_REFERENCED_2') {
            return res.status(400).json({
                error: 'Dependency Validation Failed: You cannot delete this car because it has registred transactions.'
            });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};