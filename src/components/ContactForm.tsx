import React from 'react'
import axios from 'axios'
import Input from './Input'

export default class ContactForm extends React.Component<{
  style?: any
}> {
  state = {
    name: '',
    email: '',
    comments: '',
  }

  submitForm = async () => {
    const { name, email, comments } = this.state
    try {
      if (!name || !email || !comments) {
        alert('Please complete all fields before submitting')
        return
      }
      await axios.post(
        'https://contactform.limeapartments1.now.sh/send',
        this.state
      )
      this.setState(
        {
          name: '',
          email: '',
          comments: '',
        },
        () => alert('Your information has been sent!')
      )
    } catch (err) {
      alert('There was a problem sending your information.')
    }
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 8,
          margin: 8,
          minWidth: 300,
          color: 'white',
          ...(this.props.style || {}),
        }}
      >
        <div
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 30,
          }}
        >
          Contact Us
        </div>
        <div style={{ height: 40 }} />
        <div style={{ padding: '8px 0px' }}>Name:</div>
        <Input
          onChange={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <div style={{ padding: '8px 0px' }}>Email:</div>
        <Input
          onChange={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <div style={{ padding: '8px 0px' }}>Your Message:</div>
        <textarea
          rows={8}
          onChange={(e) => {
            this.setState({
              comments: e.target.value,
            })
          }}
          value={this.state.comments}
        />
        <div style={{ alignSelf: 'center', padding: 8 }}>
          <input type="submit" value="Contact Us" onClick={this.submitForm} />
        </div>
      </div>
    )
  }
}
