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
let cityN;


let correctName = function (name) {  //correzione del nome della città per migliorare l'input
  name = name.toLowerCase();
  name = name.trim();
  name = name.replaceAll(" ", "-");
  return name;
};


btn.addEventListener("click", function(){  //funzione al click
  cityN = correctName(input.value)



  //Funzione di chiamata con axios per il collegamento alla API esterna 

  axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityN}/scores/`)
  .then(function (response) {

   
    takeCat.innerHTML = ("");
      

         
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
  

      
    
  
    
  })

 .catch (function (error){
  //alert("the name of the city entered must be in English, or you have entered a city not present in our database, sorry!");
  takeCat.style.display = 'none';
  takeSco.style.display = 'none';
  takeSum.style.display = 'block';

  takeSum.innerHTML = ("The name of the city entered must be in English, or you have entered a city not present in our database, sorry!")
  return error;
 });
 input.value = "";  //azzeramento del valore di input

});

