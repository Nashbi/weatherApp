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

//search button function
searchButton.addEventListener('click', function(){
// calling the reset function to dump the array
  reset()
//the function that reveals the current day results
  currentDay()
//weather map API
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityInput.value+'&appid=6fb59f5601260e50d988485575bdc20d&units=imperial')

  .then (response => response.json())
  .then(data => { 
    
   //setting the variable of the city name
    let cityName = data.city['name'];
// for loop incrementing by 8; setting and gathering the data from the API
    for (let index = 0; index < data.list.length; index+= 8) {
      let temp = data.list[index].main['temp'];
      let windSpeed = data.list[index].wind['speed'];
      let humidity = data.list[index].main['humidity'];
      let date = data.list[index]['dt_txt'];
//Allowing for a solid loop to take place
      array.push({
        cityName: cityName,
        temp: temp,
        windSpeed: windSpeed,
        humidity: humidity,
        date: date
      })

    }
//DOM Manipulation to establish solid data
    for (let index = 0; index < array.length; index++) {
      document.querySelector('#day'+index+ ' .date').innerHTML = "Date: " + array[index].date
      document.querySelector('#day'+index+ ' .temp').innerHTML = "Temperature: " + array[index].temp
      document.querySelector('#day'+index+ ' .windSpeed').innerHTML = "Wind Speed: " + array[index].windSpeed
      document.querySelector('#day'+index+ ' .humidity').innerHTML = "Humidity: " + array[index].humidity
    }


  }


)});


//reset function
function reset() {
  
  array = []

};

//current day function
function currentDay() {
  //grabbing live data
  fetch(' https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid=6fb59f5601260e50d988485575bdc20d&units=imperial')

  .then (response => response.json())
  .then(data => {

        let temp = data.main['temp'];
        let windSpeed = data.wind['speed'];
        let humidity = data.main['humidity'];
//dom manipulating the data
        document.querySelector('#cityDetails'+ ' .temp').innerHTML = "Temperature: " + temp
        document.querySelector('#cityDetails'+ ' .windSpeed').innerHTML = "Wind Speed: " + windSpeed
        document.querySelector('#cityDetails'+ ' .humidity').innerHTML = "Humidity: " + humidity

})};