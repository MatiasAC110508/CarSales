const multer = require('multer');

// Configure Multer to use RAM (memoryStorage)
const storage = multer.memoryStorage();

// Create the upload middleware
// 'file' is the name of the field the frontend will use to send the CSV
const upload = multer({ storage: storage });

module.exports = upload;