'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-up').show()
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
  // sign up message successful
  $('#message').text('Signed up successfully!')
  // sign up message hidden
  $('#sign-up').hide(2000)
  // resets the form
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
  $('#sign-up').show()
  $('#message').text('Oops, something went wrong. Try again!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
  $('#message').text('You logged in successfully!')
  $('#sign-in').hide(2000)
  $('#sign-up').hide(2000)
  store.user = data.user
  $('#change-password').show()
  $('.show-meal-container').show()
  $('.show-session-container').show()
  $('.sign-out-container').show()
  $('.create-meal-container').show()
  $('.create-session-container').show()
  $('.delete').show()
  $('.deleteMeal').show()
  $('.update').show()
  $('.updateMeal').show()
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
  $('#sign-in').show()
  $('#message').text('Oops, something went wrong. Try again!')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
  $('#change-password').show()
  $('#message').text('You changed your password successfully')
  $('#message').show()
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
  $('#change-password').show()
  $('#message').text('Something went went wrong, try again.')
  $('#message').show()
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
  $('#sign-up').show(1200)
  $('#sign-in').show(1200)
  $('.sign-out-container').hide()
  $('#message').text('Signed out successfully!')
  $('#message').show()
  $('.show-session-container').hide()
  $('.show-meal-container').hide()
  $('#change-password').hide()
  $('.create-meal-container').hide()
  $('.create-session-container').hide()
  $('.content').hide()
  $('.delete').hide()
  $('.deleteMeal').hide()
  $('.update').hide()
  $('.updateMeal').hide()
  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#sign-out').text('Sign out failed, try again!')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
