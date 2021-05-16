const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config()

let app = express();

var PORT = process.env.PORT || 3001;

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static("client/build"));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
  
}

app.post('/send', (req, res) => {
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
           user: 'bluedirtbike6@gmail.com',
           pass: process.env.REACT_APP_PASS
       }
});
    var mail = {
        from: req.body.name,
        to: 'bluedirtbike6@gmail.com',
        subject: 'Portfolio Contact Email',
        text: req.body.message
      }

      transporter.sendMail(mail, (err, data) => {
        console.log(mail)
        if (err) {
        console.log(err)
          res.json({
            status: 'fail'
          })
        } else {
          res.json({
           status: 'success'
          })
        }
      })
})

app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
})