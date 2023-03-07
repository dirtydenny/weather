/* Global Variables
 const currentTemp = 
 const currentCondition (rain, snow, sunny, partly cloudy)
*/

$(document).ready(() => {
  var boxForCurrentDay = document.querySelector("#currentday");
  function currentDay(data, cityName) {
    // var dateToday = moment(0).format("mm/dd/yyyy");
    var cityNameEl = document.createElement("h2");
    cityNameEl.textContent = cityName;
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
    currentHumidityEl.textContent ="Humidity: " + data.list[0].main.humidity;

    boxForCurrentDay.append(cityNameEl);
    boxForCurrentDay.append(currentTempEl);
    boxForCurrentDay.append(imageUrl);
    boxForCurrentDay.append(humidityEl);
  }
  // ES6
  const fetchWeather = (search_term) => {
    const API_KEY = "1450619e15ae8cf72330f2b72d1cc222";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search_term}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // TODO
        coor = data.coord;
        curr_weather = data.main;
        // console.log(curr_weather)
        // TODO : render curr_weather to current day display in HTML

        console.log(coor);
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coor.lat}&lon=${coor.lon}&appid=${API_KEY}&units=imperial`
        )
          .then((res) => res.json())
          .then((forecast_data) => {
            // TODO
            console.log(forecast_data);
            currentDay(forecast_data, search_term);
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

function render() {
  for (var i = 0; i < gifs.length; i++) {
    var animUrl = gifs[i].images.original.url;
    var stillUrl = gifs[i].images.original_still.url;
    var gifTitle = gifs[i].title;

    var gifElem = document.createElement("div");
    gifElem.className = "col-12 col-md-4";
    gifElem.innerHTML = `
           <div class="card">
            <img 
              src="${stillUrl}"
              data-anim="${animUrl}"
              data-still="${stillUrl}" 
              class="card-img-top gifImg" 
              alt="${gifTitle}">
            <div class="card-body">
              <h5 class="card-title">${gifTitle}</h5>
              <button 
                class="btn btn-primary gifFav" 
                data-index="${i}">
                Favorite
              </button>
            </div>
           </div>
          `;
    document.getElementById("gifDisp").append(gifElem);
  }
}
