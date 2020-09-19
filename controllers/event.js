const Event = require('../models/event')
const { notFound } = require('../lib/errorMessages')
const { cloudinary } = require('../utils/cloudinary')




// * Function to get all created events!
async function eventIndex(req, res, next) {
  try {
    const event = await Event.find()
    if (!event) throw new Error(notFound)
    res.status(200).json(event)
  } catch (err) {
    next(err)
  }
}

// * Function to create an event!!!!
async function eventCreate(req, res, next) {
  try {
    // Upload the file to cloudinary!
    const uploadResponse = await cloudinary.uploader.upload(req.body.image, {
      upload_preset: 'sporting-kids'
    })

    // Create instance of new event object
    const newEvent = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      time: req.body.time,
      image: uploadResponse.url,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    }

    // Create the event
    const event = await Event.create(newEvent)
    await event.save()
    res.json(event)

    console.log(req.body.data)
  } catch (err) {
    next(err)
  }
}

// * Function to get a single event!
async function eventShow(req, res, next) {
  const eventId = req.params.id
  try {
    const event = await Event.findById(eventId)
    if (!event) throw new Error(notFound)
    res.status(200).json(event)
  } catch (err) {
    next(err)
  }
}


// * Function to update an event!
async function eventUpdate(req, res, next) {
  // Upload the file to cloudinary!
  const uploadResponse = await cloudinary.uploader.upload(req.body.image, {
    upload_preset: 'sporting-kids'
  })

  const newEvent = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
    image: uploadResponse.url,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }

  const eventId = req.params.id
  try {
    const event = await Event.findById(eventId)
    if (!event) throw new Error(notFound)
    Object.assign(event, newEvent)
    await event.save()
    res.status(202).json(event)
  } catch (err) {
    next(err)
  }
}

// * Function to delete an event!
async function eventDelete(req, res, next) {
  const eventId = req.params.id
  try {
    const eventToDelete = await Event.findById(eventId)
    if (!eventToDelete) throw new Error(notFound)
    await eventToDelete.remove()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

// Upload an image to events
async function imageUpload(req, res, next) {
  try {
    const eventId = req.params.id
    const event = await Event.findById(eventId)
    event.image = req.file.buffer
    await event.save()
    res.send()
  } catch (err) {
    next(err)
  }
}
// async function

module.exports = {
  index: eventIndex,
  create: eventCreate,
  show: eventShow,
  update: eventUpdate,
  delete: eventDelete,
  uploadImage: imageUpload
}