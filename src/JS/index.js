import '../CSS/style.css';
// Import della librerie axios e lodash
import axios from "axios";
const _ = require("lodash");  

//dichiarazione delle costanti
const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const takeCat = document.getElementById("categories");
const takeSco = document.getElementById("score");
const takeSum = document.getElementById("summary");

btn.addEventListener("click", function(){  //funzione al click

  //Funzione di chiamata con axios per il collegamento alla API esterna 
  axios.get("https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/")
  .then(function (response) {
   
   
      let inputVal = document.getElementById("text").value;
      if (inputVal == "Los Angeles") {  // Validazione del campo richiesto
  
         
     takeSum.style.display = 'block';
     takeCat.style.display = 'block';
     takeSco.style.display = 'block';
  
  
          //Inserimento dei valori esterni dopo il click sul bottone
       takeSum.innerHTML = (response.data.summary);
       let tc = response.data.teleport_city_score.toFixed(2);
       takeSco.innerHTML = ("Total Score: " + tc);
  
       

  
      const obj = response.data.categories;
       _.forEach(obj, ((x) => { 
       takeCat.insertAdjacentHTML("afterbegin",`${x.name}: ${x.score_out_of_10.toFixed(2)}<br>`);

  }));
  
  
     };
      input.value = "";  //azzeramento del valore di input
    
  
    
  });

 
});

