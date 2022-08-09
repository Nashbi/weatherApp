var cityInput = document.querySelector("#cityInput")
var searchButton = document.querySelector("#button")
var dayOne = document.querySelector("#dayOne")
var dayTwo = document.querySelector("#dayTwo")
var dayThree = document.querySelector("#dayThree")
var dayFour = document.querySelector("#dayFour")
var dayFive = document.querySelector("#dayFive")
var cityDetails = document.querySelector("#cityDetails")

console.log(searchButton)
searchButton.addEventListener('click', function(){
console.log(searchButton)
  fetch('http://api.openweathermap.org/geo/1.0/direct?q='+cityInput.value+'&appid=6fb59f5601260e50d988485575bdc20d')
  .then (response => response.json())
  .then(data => console.log(data)

  )});