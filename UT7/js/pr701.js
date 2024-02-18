let url = 'https://swapi.dev/api/starships/';
let options = {
	method: 'GET'
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
    ;
    data.results.forEach(nave => {
        tabla.innerHTML+=`
        <tr>
        <td>${nave.name}</td>
        <td>${nave.model}</td>
        <td>${nave.cost_in_credits}</td>
        <td>${nave.passengers}</td>
        </tr>`
    });
   
    
  });
