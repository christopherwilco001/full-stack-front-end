'use strict'

const config = require('../config')
const store = require('../store')

const createSession = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sessions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      session: {
        'coach': `${data.session.coach}`,
        'length': `${data.session.length}`,
        'activity': `${data.session.activity}`
      }
    }
  })
}

const deleteSession = function (id) {
  return $.ajax({
    url: config.apiUrl + `/sessions/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSession = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `sessions/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const allSessions = function () {
  return $.ajax({
    url: config.apiUrl + '/sessions',
    method: 'GET'
  })
}

module.exports = {
  allSessions,
  createSession,
  deleteSession,
  updateSession
}
