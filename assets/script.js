//Setting the global variables
var cityInput = document.querySelector("#cityInput")
var searchButton = document.querySelector("#button")
var dayOne = document.querySelector("#dayOne")
var dayTwo = document.querySelector("#dayTwo")
var dayThree = document.querySelector("#dayThree")
var dayFour = document.querySelector("#dayFour")
var dayFive = document.querySelector("#dayFive")
var cityDetails = document.querySelector("#cityDetails")
var cityName 
var temp 
var wind
var humidity
var date
var array = []

searchButton.addEventListener('click', function(){

  reset()

  currentDay()

  fetch('http://api.openweathermap.org/data/2.5/forecast?q='+cityInput.value+'&appid=6fb59f5601260e50d988485575bdc20d&units=imperial')


  .then (response => response.json())
  .then(data => { 
    
   
    let cityName = data.city['name'];

    for (let index = 0; index < data.list.length; index+= 8) {
      let temp = data.list[index].main['temp'];
      let windSpeed = data.list[index].wind['speed'];
      let humidity = data.list[index].main['humidity'];
      let date = data.list[index]['dt_txt'];

      array.push({
        cityName: cityName,
        temp: temp,
        windSpeed: windSpeed,
        humidity: humidity,
        date: date
      })

    }

    for (let index = 0; index < array.length; index++) {
      document.querySelector('#day'+index+ ' .date').innerHTML = "Date: " + array[index].date
      document.querySelector('#day'+index+ ' .temp').innerHTML = "Temperature: " + array[index].temp
      document.querySelector('#day'+index+ ' .windSpeed').innerHTML = "Wind Speed: " + array[index].windSpeed
      document.querySelector('#day'+index+ ' .humidity').innerHTML = "Humidity: " + array[index].humidity
    }

    console.log(array)

  }


)});



function reset() {
  
  array = []

};


function currentDay() {
  
  fetch(' https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid=6fb59f5601260e50d988485575bdc20d&units=imperial')

  .then (response => response.json())
  .then(data => {

        let temp = data.main['temp'];
        let windSpeed = data.wind['speed'];
        let humidity = data.main['humidity'];

        document.querySelector('#cityDetails'+ ' .temp').innerHTML = "Temperature: " + temp
        document.querySelector('#cityDetails'+ ' .windSpeed').innerHTML = "Wind Speed: " + windSpeed
        document.querySelector('#cityDetails'+ ' .humidity').innerHTML = "Humidity: " + humidity

})};