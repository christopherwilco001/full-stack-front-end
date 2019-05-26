'use strict'

const config = require('../config')
const store = require('../store')

const createMeal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/meals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      session: {
        'name': `${data.meal.name}`,
        'calories': `${data.meal.calories}`
      }
    }
  })
}

const deleteMeal = function (id) {
  return $.ajax({
    url: config.apiUrl + `/meals/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMeal = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `meals/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const allMeals = function () {
  return $.ajax({
    url: config.apiUrl + 'meals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const favoriteMeals = function () {
//   return $.ajax({
//     url: config.apiUrl + 'sessions',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  allMeals,
  createMeal,
  deleteMeal,
  updateMeal
  // favoriteMeals
}
