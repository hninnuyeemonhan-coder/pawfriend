import axios from 'axios'

const api = axios.create({
  baseURL: 'https://w25043192.nuwebspace.co.uk/pawfriend/backend/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api