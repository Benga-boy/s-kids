import React from 'react'

const EventNewForm = ({ formData, handleImage, handleChange, handleSubmit}) => (
  <div className="event-new-form">
    <div className="columns">
      <form encType="multipart/form-data" onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
        <article className="message is-success">
          <div className="message-header">
            <p> Site to convert addresses to Lat/Long for precise map location.</p>
          </div>
          <div className="message-body">
            <a target="_blank" href="https://www.latlong.net/convert-address-to-lat-long.html" rel="noopener noreferrer">Click Here</a>
          </div>
        </article>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              value={formData.title}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              placeholder="Image"
              name="image"
              onChange={handleImage}
              type="file"
            />
          </div> 
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Date</label>
          <div className="control">
            <input
              className="input"
              placeholder="Date"
              name="date"
              onChange={handleChange}
              value={formData.date}
              type="date"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Time</label>
          <div className="control">
            <input
              className="input"
              placeholder="Time"
              name="time"
              onChange={handleChange}
              value={formData.time}
              type="time"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Latitude</label>
          <div className="control">
            <input
              className="input"
              placeholder="Latitude"
              name="latitude"
              onChange={handleChange}
              value={formData.latitude}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Longitude</label>
          <div className="control">
            <input
              className="input"
              placeholder="Longitude"
              name="longitude"
              onChange={handleChange}
              value={formData.longitude}
            />
          </div>
          <button type="submit" className="button is-fullwidth is-link">Create Event</button>
        </div>
      </form>
    </div>
  </div>
)

export default EventNewForm