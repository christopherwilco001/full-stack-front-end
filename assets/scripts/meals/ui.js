'use strict'

const showMealsTemplate = require('../templates/meals-list.handlebars')

const getMealSuccess = (data) => {
  const showMealsHtml = showMealsTemplate({ meals: data.meals })
  $('.content').html(showMealsHtml)
  $('#message').text('All player meals!')
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
}

const updateMealSuccess = (data) => {
  const showMealsHtml = showMealsTemplate({ meals: data.meals })
  $('.content').html(showMealsHtml)
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
