import React from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import axios from 'axios'
import './Contact.css'

class Contact extends React.Component {

  constructor() {
    super()

    // TODO: keep "email has been sent" message after the form has been reset
    this.state = {
      name: '',
      email: '',
      message: '',
      emailSent: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    this.setState({ emailSent: true })
    const { name, email, message} = this.state;

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })

  }

  render() {
    return (
      <div className="contact-grid">
        <div className="contact-page-title">
          <h1>Contact Me</h1>
        </div>

        <div className="contact-page-description">
          <p>
            If you have any questions over the content of the website feel free
            to contact me! I will answer any questions as soon as I can.
          </p>
          <br/>
          <p>
            Also, if there are any mistakes such as: errors in the code, grammatical
            errors in the text or errors loading content through links or images,
            let me know.
          </p>
        </div>

        <div className="container">
          <div className="wrapper animated bounceInLeft">

            <div class="personal-info">
              <h3>My Info</h3>
              <ul>
                <li>
                  <p>Name: </p>
                  Cameron Shatto
                </li>
                <li>
                  <p>Email: </p>
                  ExploringDataStructures@gmail.com
                </li>
              </ul>
            </div>
            <div className="contact">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup className="form-group">
                  <Label for="name">Name:</Label>
                  <Input
                    type="text"
                    name="name"
                    onChange={this.handleChange} />
                </FormGroup>

                <FormGroup className="form-group">
                  <Label for="email">Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    onChange={this.handleChange} />
                </FormGroup>

                <FormGroup className="full">
                  <Label for="message">Message:</Label>
                  <Input
                    type="textarea"
                    name="message"
                    onChange={this.handleChange} />
                </FormGroup>

                {this.state.emailSent === true &&
                  <p>Email has been sent!</p>
                }
                <Button className="full">Send Email</Button>
              </Form>
            </div>
          </div>
        </div>

        <div className="contact-page-hr">
          <hr/>
        </div>

      </div>
    )
  }

}

export default Contact
