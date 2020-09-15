export const setToken = token => {
  window.localStorage.setItem('token', token)
}

export const getToken = () => {
  return window.localStorage.getItem('token')
}

//* returns the decodes data from the token or false
const getPayload = () => {
  const token = getToken()
  if (!token) return false 
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(window.atob(parts[1]))
}

// * Function to log user out
export const logout = () => {
  localStorage.removeItem('token')
}


export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false

  // * works out the time RIGHT NOW
  const now = Math.round(Date.now() / 1000)

  //* is RIGHT NOW earlier than the expiry time on token?
  return now < payload.exp
}