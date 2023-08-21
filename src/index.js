
//dichiarazione delle costanti

const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const takeCat = document.getElementById("categories");
const takeSco = document.getElementById("score");
const takeSum = document.getElementById("summary");

//Funzione per il collegamento alla API esterna 

fetch('https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/')
.then(response => response.json())
.then(json=>{
  const infoFetch = json;
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", function(){  //funzione al click
    let inputVal = document.getElementById("text").value;
    if (inputVal == "Los Angeles") {  // Validazione del campo richiesto

       
   takeSum.style.display = 'block';
   takeCat.style.display = 'block';
   takeSco.style.display = 'block';


        //Inserimento dei valori esterni dopo il click sul bottone
     takeSum.innerHTML = (infoFetch.summary);
     let tc = infoFetch.teleport_city_score.toFixed(2);
     takeSco.innerHTML = ("Total Score: " + tc);

     infoFetch.categories.forEach((x) => {
     takeCat.insertAdjacentHTML("afterbegin",`${x.name}: ${x.score_out_of_10.toFixed(2)}<br>`);
     
});

    } else{
 
       alert("insert the correct city"); //messaggio per errato input
    };
    input.value = "";  //azzeramento del valore di input
  

});
});
