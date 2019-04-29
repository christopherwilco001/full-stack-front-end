'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onAllSession = function (event) {
  event.preventDefault()
  api.allSessions()
    .then(ui.getSessionSuccess)
    .catch(ui.failure)
}
const onCreateSession = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createSession(data)
    .then(ui.createSessionSuccess)
    .catch(ui.failure)
}

const onDeleteSession = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteSession(id)
    .then(() => onAllSession(event))
    .then(ui.onDeleteSessionSuccess)
    .catch(ui.failure)
}

const onUpdateSession = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updateSession(data, id)
    .then(() => onAllSession(event))
    .catch(ui.failure)
}

const addHandlers = function () {
  $('#create-session').on('submit', onCreateSession)
  $('#content').on('click', '.delete', onDeleteSession)
  $('#content').on('submit', '.update', onUpdateSession)
  $('#allSessions').on('click', onAllSession)
}

module.exports = {
  addHandlers
}
