import React from 'react'

import { createEvent } from '../../lib/api'
import EventNewForm from './EventNewForm'

class EventNew extends React.Component {
  state = {
    formData: {
      title: '',
      description: '',
      date: '',
      time: '',
      longitude: '',
      latitude: '',
      image: ''
    },
    fileInput: ''
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    
    const newEvent = {
      title: this.state.formData.title,
      description: this.state.formData.description,
      date: this.state.formData.date,
      time: this.state.formData.time,
      longitude: this.state.formData.longitude,
      latitude: this.state.formData.latitude,
      image: this.state.fileInput
    }

    try {
      await createEvent(newEvent)
      this.props.history.push('/whatson')
    } catch (err) {
      console.log(err)
    }
  }

  handleImageChange = event => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      this.setState({fileInput: reader.result})
    }
  }


  render() {
    console.log(this.state.fileInput)
    return (
      <div className="event-new">
        <section className="section">
          <EventNewForm
            formData={this.state.formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleImage = {this.handleImageChange}
          />
        </section>

        {this.state.fileInput && (<img src={this.state.fileInput} alt="Chosen" style={{height: '300px'}}/>)}
      </div>
    )
  }
}

export default EventNew