const express = require("express");
const nunjucks = require("nunjucks");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 3000;

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.get("/", function(request, result) {
  result.render("home");
});

app.listen(port, function(){
  console.log(`Server is running on ${port}`)
});
