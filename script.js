/* Global Variables
 const currentTemp = 
 const currentCondition (rain, snow, sunny, partly cloudy)
*/
var dateToday = moment().format("MMMM Do YYYY, h:mm:ss a");

$(document).ready(() => {
  var boxForCurrentDay = document.querySelector("#currentday");
  var historySection = document.querySelector("#search-history");
  var boxForFutureDay = document.querySelector
  ("#dateDay1");// + [i]

  const saveHistory = (cityName) => {
    // hisotry button for each city
    var newButton = document.createElement("button");
    newButton.innerHTML = cityName;
    newButton.addEventListener("click", () => {
      fetchWeather(cityName);
    });

    historySection.append(newButton);
  };
// function to create and render searched city
  function currentDay(data, cityName) {
    boxForCurrentDay.innerHTML = '';
    var dateToday = moment().format("MMMM Do YYYY, h:mm:ss a");
    var cityNameEl = document.createElement("h2");
    cityNameEl.textContent = cityName;
    var imageEl = document.createElement("img");
    var imageUrl =
      "https://openweathermap.org/img/wn/" +
      data.weather[0].icon + ".png";

    imageEl.setAttribute("src", imageUrl);

    var currentTempEl = document.createElement("h3");
    console.log(data.main.temp);
    currentTempEl.textContent = "Tempurature: " + 
    data.main.temp;

    var humidityEl = document.createElement("p");
    console.log(data.main.humidity);
    humidityEl.textContent = "Humidity: " + 
    data.main.humidity + '%';

    var windEl = document.createElement("p");
    console.log(data.wind.speed);
    windEl.textContent = "Wind Speed: " + 
    data.wind.speed + " MPH";

    boxForCurrentDay.append(cityNameEl);
    boxForCurrentDay.append(dateToday);
    boxForCurrentDay.append(imageEl);
    boxForCurrentDay.append(currentTempEl);
    boxForCurrentDay.append(humidityEl);
    boxForCurrentDay.append(windEl);
    //
  }
  
  function futureDay(data, cityName) {
    boxForFutureDay.innerHTML = '';
    //var dateToday = moment().format("MMMM Do YYYY, h:mm:ss a");
    //var cityNameEl = document.createElement("h2");
    //cityNameEl.textContent = cityName;
 
    var imageEl = document.createElement("img");
    var imageUrl =
      "https://openweathermap.org/img/wn/" +
      data.list[0].weather[0].icon +
      ".png";

    imageEl.setAttribute("src", imageUrl);

    var currentTempEl = document.createElement("p");
    console.log(data.list[0].main.temp);
    currentTempEl.textContent = "Tempurature: " + data.list[0].main.temp;

    var humidityEl = document.createElement("p");
    console.log(data.list[0].main.humidity);
    humidityEl.textContent = "Humidity: " + data.list[0].main.humidity + '%';

    var windEl = document.createElement("p");
    console.log(data.list[0].wind.speed);
    windEl.textContent ="Wind Speed: " + data.list[0].wind.speed + " MPH"
    

    //boxForFutureDay.append(cityNameEl);
    //boxForFutureDay.append(dateToday);
    boxForFutureDay.append(imageEl);
    boxForFutureDay.append(currentTempEl);

    boxForFutureDay.append(humidityEl);
    boxForFutureDay.append(windEl);
    //
  }
  // ES6
  const fetchWeather = (search_term) => {
    const API_KEY = "1450619e15ae8cf72330f2b72d1cc222";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search_term}&appid=${API_KEY}&units=imperial`
    )
      .then((res) => res.json())
      .then((data) => {
        // TODO
        coor = data.coord;
        curr_weather = data;
         console.log(curr_weather)
        // TODO : render curr_weather to current day display in HTML
        
        console.log(coor);
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coor.lat}&lon=${coor.lon}&appid=${API_KEY}&units=imperial`
        )
          .then((res) => res.json())
          .then((forecast_data) => {
            // TODO
            console.log(forecast_data);
            //currentDay(forecast_data, search_term);
            currentDay(curr_weather, search_term);
            console.log(forecast_data.list[0]);
            console.log(forecast_data.list);
            futureDay(forecast_data, search_term);

                      
            saveHistory(search_term);
            //next5days(,)
          });
      });
  };

  // User inpt
  $("#city-bt").on("click", () => {
    const search_term = $("#city-search").val();
    $("#city-search").val("");
    fetchWeather(search_term);

  });

  // fetch API function
  // input:  city name
  // output: weather of the city
});
