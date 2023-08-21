(() => { "use strict"; 
var e = document.querySelector("input"), 
    t = (document.querySelector("#btn"), 
    document.getElementById("categories")), 
    n = document.getElementById("score"), 
    o = document.getElementById("summary"); 
 fetch("https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/")
.then((function (e) { return e.json() }))
.then((function (c) { 
    var r = c;
     document.querySelector("#btn").addEventListener("click", (function () {
         if ("Los Angeles" == document.getElementById("text").value)  {
         o.style.display = "block",
          t.style.display = "block", 
          n.style.display = "block", 
          o.innerHTML = r.summary; 
          var c = r.teleport_city_score.toFixed(2); 
          n.innerHTML = "Total Score: " + c, 
          r.categories.forEach((function (e) {
             t.insertAdjacentHTML("afterbegin", "".concat(e.name, ": ").concat(e.score_out_of_10.toFixed(2), "<br>")) })) 
            } else alert("insert the correct city"); 
            e.value = "" })) })) })();