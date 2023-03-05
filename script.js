$(document).ready(() => {
  // ES6
  const fetchWeather = (search_term) => {
    const API_KEY = "b2e24dab707e582bdf1f20a5720ab74e";
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
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coor.lat}&lon=${coor.lon}&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((forecast_data) => {
            // TODO
            console.log(forecast_data);
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
