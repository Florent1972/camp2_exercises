const request = require("request");

function simpleGet(output){
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, body) {
      output(body);
    });
}

function callback(result){
  console.log(result);
}
simpleGet(callback);

module.exports = {
  simpleGet: simpleGet
};


function simpleGetWithParams(output){
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function(error, response, body) {
      const parsedData = JSON.parse(body);
      output(parsedData.args);
    });
}

simpleGet(callback);
simpleGetWithParams(callback);



module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams
};

const date = new Date();
const timestamp =
  date.getFullYear().toString() +
  "-" +
  (date.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  date
    .getDate()
    .toString()
    .padStart(2, "0");

function validateTimestamp(output){
  request(
    {
      url:`https://postman-echo.com/time/valid?timestamp=${timestamp}`,
      method: "GET"
    },
    function(error, response, body) {
      output(body);
    });
}
validateTimestamp(callback);
module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
