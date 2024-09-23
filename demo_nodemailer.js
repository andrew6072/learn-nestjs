const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();


// Create an instance of express
const app = express();

// Configure the transporter for nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS  // Replace with your actual password or use environment variables for security
    }
});

// Email options
const mailOptions = {
    from: 'leducanh017@gmail.com',
    to: 'leducanh017mephi@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'First email sent by Node.js server. That was easy!'
};

// Send email when server starts
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error sending email:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});

// Start the server
app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});