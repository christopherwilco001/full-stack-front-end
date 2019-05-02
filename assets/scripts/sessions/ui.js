'use strict'

const showSessionsTemplate = require('../templates/sessions-list.handlebars')

const getSessionSuccess = (data) => {
  const showSessionsHtml = showSessionsTemplate({ sessions: data.sessions })
  $('.content').html(showSessionsHtml)
  $('#message').text('All player sessions!')
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
}

const updateSessionSuccess = (data) => {
  const showSessionsHtml = showSessionsTemplate({ sessions: data.sessions })
  $('.content').html(showSessionsHtml)
  $('#endMessage').text('Updated your session!')
  setTimeout(function () {
    $('#endMessage').text('')
  }, 2000)
  $('#message').hide('')
}

const onDeleteSessionSuccess = () => {
  $('#endMessage').text('Deleted session successfully!')
  setTimeout(function () {
    $('#endMessage').text('')
  }, 2000)
  $('#message').hide('')
}

const onCreateSessionSuccess = () => {
  $('#endMessage').text('Session created successfully!')
  setTimeout(function () {
    $('#endMessage').text('')
  }, 2000)
  $('form').trigger('reset')
}

module.exports = {
  getSessionSuccess,
  updateSessionSuccess,
  onDeleteSessionSuccess,
  onCreateSessionSuccess
}
