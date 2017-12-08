const request = require("request");

const API_WEATHER_KEY = process.env.OPEN_WEATHER_KEY;
function weatherByCity(city) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_WEATHER_KEY}&units=metric`,
      method: "GET",

    },
    function(error, response, result) {
      const json = JSON.parse(result);
      console.log(`${json.main.temp} °C`);
      return `${json.main.temp} °C`;
    }
  );
}
//weatherByCity("Lyon");
module.exports = weatherByCity;
