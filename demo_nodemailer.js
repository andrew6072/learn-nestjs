var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'leducanh017@gmail.com',
        pass: '*******'
    }
});

var mailOptions = {
    from: 'leducanh017@gmail.com',
    to: 'leducanh017mephi@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
