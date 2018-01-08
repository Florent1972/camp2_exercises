const fetch = require("node-fetch")

function getRessources() {
  return fetch(
    `https://decath-product-api.herokuapp.com/categories`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .catch((error) => {console.warn("Ceci est une erreur de Florent",error);
    })
    })
  ;


getBrandTitle().then((result) => console.log(result));
