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
  $('#message').text('Updated your session!')
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
}

const onDeleteSessionSuccess = () => {
  $('#message').text('Deleted session successfully!')
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getSessionSuccess,
  updateSessionSuccess,
  onDeleteSessionSuccess,
  failure
}
