let url = 'https://swapi.dev/api/starships/';
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
    
   
    
    data.results.forEach(nave => {
        tabla.innerHTML+=`
        <tr>
        <td>${nave.name}</td>
        <td>${nave.model}</td>
        <td>${nave.cost_in_credits}</td>
        <td>${nave.passengers}</td>
        </tr>`
    });
   
   if (data.next){
        url=data.next
        naves()
   } 
  });
}
naves()
