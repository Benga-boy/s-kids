const dbURI = process.env.DBURI || 'mongodb+srv://Rene:rowills123@sporting-kids.jmy70.mongodb.net/sporting-kids?retryWrites=true&w=majority'
const secret = process.env.SECRET || 'Sporting kidssssssss'

module.exports = {
  dbURI,
  secret
}