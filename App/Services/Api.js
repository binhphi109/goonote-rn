import apisauce from 'apisauce'
import Config from 'react-native-config'

console.tron.log('Config.API_URL', Config.API_URL)

// our "constructor"
const create = (baseURL = Config.API_URL) => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  return api
}

// let's return back our create method as the default.
export default {
  create
}
