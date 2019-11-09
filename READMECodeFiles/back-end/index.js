const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>
        ${req.body.message}
      </p>
    `

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '******@gmail.com',
        pass: '******'
      }
    })

    let mailOptions = {
      from: '******@gmail.com',
      to: '******@gmail.com',
      subject: 'New Contact Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if(error) {
        return console.log(error)
      }

      console.log('Message sent: %s', info.message)
      console.log('Message URL %s', nodemailer.getTestMessageURL(info))

    })
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`)
})
