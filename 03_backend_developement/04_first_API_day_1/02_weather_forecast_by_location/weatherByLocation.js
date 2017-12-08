const request = require("request");

const API_WEATHER_KEY = process.env.OPEN_WEATHER_KEY;

function weatherByLatitudeAndLongitude(lat, lon) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_WEATHER_KEY}`,
      method: "GET",

    },
    function(error, response, result) {
      console.log(result);
      return result;
    }
  );
}

function weatherByZipcode(Zipcode, City) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?Zip=${Zipcode}&q=${City}&APPID=${API_WEATHER_KEY}`,
      method: "GET",

    },
    //function(error, response, result) {
    //  console.log(result);
    //return result;
    //},
    function(error, response, result) {
      const json = JSON.parse(result).list;
      const newArray = json.map(renderObject);
      console.log(newArray);
    }
  );
}

function renderObject (day) {
  const objectDay={
    date : ${new Date (day.dt*1000).getDate()}/${new Date (day.dt*1000).getMonth()+1}/${new Date (day.dt*1000).getFullYear()};
  temperature : day.main.temp,
  weather : renderWeather
};
return objectDay;  
  }


//weatherByLatitudeAndLongitude(45.7485, 4.8467);
weatherByZipcode(69007, "Lyon");

module.exports = weatherByLatitudeAndLongitude;
module.exports = weatherByZipcode;
