/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import Map from '../event/Map'
// import moment from 'moment'


import { getEvent, deleteEvent } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'

class WhatsOn extends React.Component {
  state = {
    event: null
  }

  // * Get Event at index 0 as they wish to post one at a time - so latest event
  async componentDidMount() {
    try {
      const res = await getEvent()
      const data = res.data[0]
      this.setState({ event: data })
    } catch (err) {
      console.log(err)
    }
  }


  // * Function to handle deleting an event!
  handleDelete = async () => {
    try {
      const eventId = this.state.event._id
      await deleteEvent(eventId)
      this.props.history.push('/')
    } catch (err) {
      console.log(err.response)
    }
  }



  render() {
    if (!this.state.event) return <section className="non-event hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            COMING SOON
          </h1>
          {isAuthenticated() && <Link to={'/whatson/create'} className="button is-link">Create Event</Link>}
        </div>
      </div>
    </section>

    const { event } = this.state


    // Convert date using moment
    // const date = moment(event.date).format('LL')
    return (
      <div className="whatson">
        <section className="hero is-link has-text-centered">
          <div className="change hero-body">
            <div className="container">
              <h1 className="title">
                <strong>SPORTING KIDS EVENTS</strong>
              </h1>
            </div>
          </div>
        </section>
        <section className="whatson-info">
          <div className="whatson-event">
            <h1 className="title"><strong>{event.title}</strong></h1>
            <figure className="image is-16by9">
              <img className="has-ratio" width="640" height="360"
                src={event.image}
                frameBorder="0" allowFullScreen alt="Sporting Kids event" />
            </figure>
            <br />
            <div className="columns">
              <div className="column">
                <div className="content is-medium">
                  <h3 className="title"><strong>DETAILS</strong></h3>
                  <p>{event.description} </p>
                  <h3 className="title"><strong>DATE</strong></h3>
                  <p>{event.date} </p>
                  <h3 className="title"><strong>TIME</strong></h3>
                  {/* <p>{event.time} </p> */}
                  {parseFloat(event.time) >= 12 ? <p>{event.time} PM</p> : <p>{event.time} AM </p>}
                </div>
              </div>
              <div className="column">
                <div className="map">
                  <Map
                    longitude={parseFloat(event.longitude)}
                    latitude={parseFloat(event.latitude)}
                  />
                </div>
              </div>
            </div>
            {isAuthenticated() && <Link to={`/whatson/${event._id}/edit`} className="button is-link" style={{ marginRight: '5px' }}>Edit</Link>}
            {isAuthenticated() && <button onClick={this.handleDelete} className="button is-danger">Delete</button>}
          </div>
        </section>
      </div>
    )
  }
}

export default WhatsOn