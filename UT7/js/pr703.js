let url = 'https://swapi.dev/api/starships/';

let btnAnterior = document.getElementById('anterior')
        .addEventListener('click',anterior)

let btnSiguiente = document.getElementById('siguiente')
        .addEventListener('click',siguiente)

let urlAnterior
let urlSiguiente
function naves(){
const options = {
	method: 'GET',
};

fetch(url, options)
  .then(res => res.json())
  .then(response => {
    data = response;
    console.log(data);
    let tabla = document.getElementById('tabla');
    tabla.innerHTML=`
    <tr>
    <td><b>Nombre</b></td>
    <td><b>Modelo</b></td>
    <td><b>Coste</b></td>
    <td><b>Pasageros</b></td>
    </tr>`
        data.results.forEach(nave => {
        tabla.innerHTML+=`
        <tr>
        <td>${nave.name}</td>
        <td>${nave.model}</td>
        <td>${nave.cost_in_credits}</td>
        <td>${nave.passengers}</td>
        </tr>`
    });
    urlAnterior = data.previous
    urlSiguiente = data.next
  });
}

function anterior(){
    if (urlAnterior){
        url=urlAnterior
        naves()
   } 
}
function siguiente(){
    if (urlSiguiente){
        url=urlSiguiente
        naves()
   } 
}
naves();
