import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { VFlex, HFlex } from './components/Shared'
import CallNow from './components/CallNow'
import axios from 'axios'

export default class Contact extends React.Component<{}> {
  state = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    comments: '',
  }
  render() {
    return (
      <>
        <Header
          images={[
            require('../static/images/contact-header1.jpg'),
            require('../static/images/contact-header2.jpg'),
            require('../static/images/contact-header3.jpg'),
            require('../static/images/contact-header4.jpg'),
            require('../static/images/contact-header5.jpg'),
          ]}
        />

        <VFlex style={{ backgroundColor: 'white' }}>
          <HFlex>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 8,
                margin: 8,
                minWidth: 300,
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                Contact Us
              </div>
              <div>First Name:</div>
              <input
                type="text"
                onChange={(e) => {
                  this.setState({
                    firstname: e.target.value,
                  })
                }}
                value={this.state.firstname}
              />
              <div>Last Name:</div>
              <input
                type="text"
                onChange={(e) => {
                  this.setState({
                    lastname: e.target.value,
                  })
                }}
                value={this.state.lastname}
              />
              <div>Phone Number:</div>
              <input
                type="text"
                maxLength={13}
                onChange={(e) => {
                  this.setState({ phone: e.target.value })
                }}
                value={this.state.phone}
              />
              <div>Email:</div>
              <input
                type="text"
                onChange={(e) => {
                  this.setState({
                    email: e.target.value,
                  })
                }}
                value={this.state.email}
              />
              <div>Comments:</div>
              <textarea
                rows={4}
                onChange={(e) => {
                  this.setState({
                    comments: e.target.value,
                  })
                }}
                value={this.state.comments}
              />
              <div style={{ alignSelf: 'center', padding: 8 }}>
                <input
                  type="submit"
                  value="Contact Us"
                  onClick={async () => {
                    try {
                      if (
                        !this.state.firstname ||
                        !this.state.lastname ||
                        !this.state.email ||
                        !this.state.phone ||
                        !this.state.comments
                      ) {
                        alert(
                          'Please fill out all the fields before submitting'
                        )
                        return
                      }
                      await axios.post(
                        'https://contact.limeapartments.com/send',
                        this.state
                      )
                      this.setState({
                        firstname: '',
                        lastname: '',
                        email: '',
                        phone: '',
                        comments: '',
                      })
                      alert(
                        "Your information has been sent, we'll be in touch soon!"
                      )
                    } catch (err) {
                      alert(
                        'There was a problem sending your information. Please try again.'
                      )
                    }
                  }}
                />
              </div>
            </div>

            <div>
              <div>
                <p>
                  <strong>Lime Apartments</strong>
                  <br />
                  2904 Lyndale Avenue • Minneapolis, MN 55408
                  <br />
                  <strong>612.213.4138</strong>
                </p>
                <p>Office Hours</p>
                <ul>
                  <li>Monday — Friday: 9:00am – 6:00pm</li>
                  <li>Saturday: 10:00am – 5:00pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <iframe
                style={{
                  border: 'none',
                  width: '100%',
                  maxWidth: 600,
                  height: 250,
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.699373434938!2d-93.28862300000003!3d44.949779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62786279600b1%3A0x50632f6c436231c9!2sLime+Apartments!5e0!3m2!1sen!2sus!4v1402594082801"
              />
            </div>
          </HFlex>
        </VFlex>
        <Footer />
        <CallNow />
      </>
    )
  }
}
