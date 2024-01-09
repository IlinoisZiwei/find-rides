const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    methods: ['GET', 'POST'] // Allowable methods
  }));
  
app.use(bodyParser.json());
// Configure Nodemailer
let transporter = nodemailer.createTransport({
  service: 'gmail', // Use any SMTP service you prefer
  auth: {
    user: 'jiangshangong0118@gmail.com', // Your email address
    pass: 'Gmail_Gong_2713' // Your email password
  }
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'jiangshangong0118@gmail.com', // Sender address
    to: 'jiangshan_gong@163.com', // List of recipients
    subject: `New Contact Message from ${name}`, // Subject line
    text: `You have a new contact message from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
    replyTo: email
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.error(err);
      res.status(500).send('Error sending email');
    } else {
      console.log(info);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
