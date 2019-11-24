import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'http://localhost:3001/api/') => {
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
