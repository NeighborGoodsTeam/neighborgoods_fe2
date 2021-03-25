import axios from 'axios'
const apiKey = `AIzaSyAOnkT3xmLav8TzxsIW5hetZZZBXD8E954`

export const getLatLong = address => {
  return axios({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`,
  })
}
