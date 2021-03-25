import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexBusinesses = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/businesses/',
  })
}

export const showMyBusiness = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/my-business/',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const showBusiness = (user, id) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/business/' + id + '/',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const createBusiness = (user, businessData) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/create-business/',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      "business": businessData
    }
  })
}

export const updateBusiness = (user, businessData, id) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/business/' + id + '/',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      "business": businessData
    }
  })
}
