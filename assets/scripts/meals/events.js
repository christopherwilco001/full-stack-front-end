'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onAllMeal = function (event) {
  event.preventDefault()
  api.allMeals()
    .then(ui.getMealSuccess)
    .catch(ui.failure)
}

// const onGetFavorites = function (event) {
//   event.preventDefault()
//   api.favoriteMeals()
//     .then(ui.getFavoritesSuccess)
//     .catch(ui.failure)
// }

const onCreateMeal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createMeal(data)
    .then(ui.onCreateMealSuccess)
    .catch(ui.failure)
}

const onDeleteMeal = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteMeal(id)
    .then(() => onAllMeal(event))
    .then(ui.onDeleteMealSuccess)
    .catch(ui.failure)
}

const onUpdateMeal = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updateMeal(data, id)
    .then(ui.updateMealSuccess)
    .then(() => onAllMeal(event))
    .catch(ui.failure)
}

const addHandlers = function () {
  $('#create-meal').on('submit', onCreateMeal)
  $('#content').on('click', '.deleteMeal', onDeleteMeal)
  $('#content').on('submit', '.updateMeal', onUpdateMeal)
  $('#allMeals').on('click', onAllMeal)
  // $('#allFavorites').on('click', onGetFavorites)
}

module.exports = {
  addHandlers
}
