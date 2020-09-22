import React from 'react'

import { getSingleEvent, editEvent } from '../../lib/api'

import EventForm from './EventForm'

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


  // on mount - Update state with current event info
  async componentDidMount() {
    const eventId = this.props.match.params.id
    try {
      const res = await getSingleEvent(eventId)
      this.setState({ formData: res.data})
    } catch (err) {
      console.log(err.response)
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    
    const eventId = this.props.match.params.id

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
      await editEvent(eventId, newEvent)
      this.props.history.push('/whatson')
    } catch (err) {
      console.log(err)
    }
  }

  // Handle file input image upload
  handleImageChange = event => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      this.setState({fileInput: reader.result})
    }
  }


  render() {
    return (
      <div className="event-new">
        <section className="section">
          <EventForm
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