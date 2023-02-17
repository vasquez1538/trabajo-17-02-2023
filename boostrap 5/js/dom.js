console.log("Entramos");

var items = document.getElementsByClassName("item");

var cantidad= items.length; 

console.log(cantidad);

var div=document.createElement("div");
div;
div.innerText= "aprendiendo javascript"
var divuno = document.getElementById("uno");

divuno.appendChild(div);

var lista=document.getElementById("lista");

var hijo = document.createElement("li");

hijo.innerText="li nuevo";
lista.appendChild(hijo);

var parrafo=document.getElementById("par").style.color="red";
var lista=document.getElementById("lista").style.color="green";

//siguiente

var divdos=document.createElement("div");
divdos.style.backgroundcolor="blue";
var parrafo=document.createElement ("p");
parrafo.innertext="Los derechos humanos son los derechos que tenemos básicamente por existir como seres humanos; no están garantizados por ningún estado. Estos derechos universales son inherentes a todos nosotros, con independencia de la nacionalidad, género, origen étnico o nacional, color, religión, idioma o cualquier otra condición.";
var lista2 =document.createElement("ul");
var contenido=document.createElement("li");
contenido.innerText="contenido";
lista2-appendChild(contenido);
divdos.appendChild(parrafo);
divdos.appendChild(lista2);
