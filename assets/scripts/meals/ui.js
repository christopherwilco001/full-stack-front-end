'use strict'

const showSessionsTemplate = require('../templates/meals-list.handlebars')

const getMealSuccess = (data) => {
  const showSessionsHtml = showSessionsTemplate({ meals: data.meals })
  $('.content').html(showSessionsHtml)
  $('#message').text('All player meals!')
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
}

// const getFavoritesSuccess = (data) => {
//   const showSessionsHtml = showSessionsTemplate({ meals: data.meals })
//   $('.content').html(showSessionsHtml)
//   $('#message').text('All Favorites!')
//   setTimeout(function () {
//     $('#message').text('')
//   }, 2000)
// }

const updateMealSuccess = (data) => {
  const showSessionsHtml = showSessionsTemplate({ meals: data.meals })
  $('.content').html(showSessionsHtml)
  $('#endMessage').text('Updated your meal!')
  setTimeout(function () {
    $('#endMessage').text('')
  }, 2000)
}

const onDeleteMealSuccess = () => {
  $('#endMessage').text('Deleted meal successfully!')
  setTimeout(function () {
    $('#endMessage').text('')
  }, 2000)
  $('#message').hide('')
}

const onCreateMealSuccess = () => {
  $('#endMessage').text('Meal created successfully!')
  setTimeout(function () {
    $('#endMessage').text('')
  }, 2000)
  $('form').trigger('reset')
}

module.exports = {
  onCreateMealSuccess,
  onDeleteMealSuccess,
  updateMealSuccess,
  getMealSuccess
  // getFavoritesSuccess
}
