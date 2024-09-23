const express = require('express');
const multer = require('multer');
const path = require('path');

// Create an instance of express
const app = express();

// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'data/uploads/');  // Uploads will be saved in the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));  // Use current timestamp as filename with original extension
    }
});

// Initialize upload variable with multer configuration
const upload = multer({ storage: storage });

// Serve the HTML form (you would typically do this in your static files setup)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/form_file_upload.html'));
});

// Handle the file upload via the '/fileupload' route
app.post('/fileupload', upload.single('filetoupload'), (req, res) => {
    try {
        // File uploaded successfully
        console.log(req.file);  // Log the uploaded file details
        res.send('File uploaded successfully!');
    } catch (err) {
        console.error(err);
        res.sendStatus(500).send('Error uploading file.');
    }
});

// upload.single('filetoupload') is middleware that processes a single 
// file upload. It expects the file input field in the request to have the 
// name 'filetoupload'.

// (req, res) => { ... } is the route handler function that takes a 
// request (req) and response (res) object as parameters.

// Start the server on port 8080
app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
