const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path')
require('dotenv/types').config()

let PORT = 3001 || process.env.PORT

let app = express();

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

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

app.post('/send', (req, res) => {
    var mail = {
        from: req.body.name,
        to: 'bluedirtbike6@gmail.com',
        subject: 'Portfolio Contact Email',
        text: req.body.message
      }
      transporter.sendMail(mail, (err, data) => {
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