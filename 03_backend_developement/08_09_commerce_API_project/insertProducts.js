const request = require("request");
const PG = require("pg");

const { Pool } = require("pg");

const pool = new Pool();

function readProducts(){

// lecture de toutes les marques
  return request(
    {
      url: "https://decath-product-api.herokuapp.com/products",
      method: "GET",
      headers: {"content-type":"application/json"},
    },
    function(error, response, result) {
      console.log("error:", error);
      // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode);
      // Print the response status code if a response was received
      // console.log("result:", result); // Print the HTML for the Google homepage.
      const reponseJSON = JSON.parse(result);
      // insertion de chaque objet en bdd
      //console.log ( reponseJSON.length );
      // const client = new PG.Client();
      // client.connect();
      reponseJSON.forEach(insertProduct);
      // client.end();
    }
  );
}


// reçoit un objet categorie et l'insere en bdd dans table "categories"
function insertProduct(product){

  pool.query(
    "INSERT INTO products (id, label) VALUES ($1::uuid, $2::text)",
    [categorie.id, categorie.label],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log(`Insertion avec succés de : ${categorie.id} - ${categorie.label}`);
      }

    }
  );

}

readCategories();


module.exports = readCategories;
