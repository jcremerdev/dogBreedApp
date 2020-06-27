'use strict';
function getDogImage(breed) {
  let url = `https://dog.ceo/api/breed/${breed}/images/random`;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status == 'success') {
    $('.results').html(
        `<img src="${responseJson.message}" class="results-img">`
    )
  }
  else {
    alert('Something went wrong. Try again later.')
  }
}

function watchForm() {
  $('.form').on('submit', function() {
    event.preventDefault();
    const breedDog = $(event.currentTarget).find('#breed');
    const breed = breedDog.val();
    console.log('show a(n) ' + breed + ' pic!');
    getDogImage(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});