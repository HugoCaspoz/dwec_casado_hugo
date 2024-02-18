const url = 'https://hotels4.p.rapidapi.com/locations/v3/search?q=spain';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d42143635msh8f800602a00d5a7p1fd8d8jsn83f8b5671d88',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

fetch(url, options)
  .then(res => res.json())
  .then(response => {
    data = response;
    console.log(data);
    
  });