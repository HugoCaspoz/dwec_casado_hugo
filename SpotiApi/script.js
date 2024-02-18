const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=8&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d42143635msh8f800602a00d5a7p1fd8d8jsn83f8b5671d88',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch(url, options)
  .then(res => res.json())
  .then(response => {
    data = response;
    console.log(data);
    let primerosAlbumes=document.getElementById('primerosAlbumes');
    primerosAlbumes.innerHTML='<ul>';
    for (let a=0; a<10 ;a++){
        
        primerosAlbumes.innerHTML+=`
        <li>
        ${response.albums.items[a].data.artists.items[0].profile.name}
        <img src="${response.albums.items[a].data.coverArt.sources[2].url}"  width= "100", height= "100"></img>
        </li>`;
    }
    primerosAlbumes.innerHTML+='</ul>';
  });
