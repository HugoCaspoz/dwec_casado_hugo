const url = 'https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d42143635msh8f800602a00d5a7p1fd8d8jsn83f8b5671d88',
		'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
	}
};
fetch(url, options)
  .then(res => res.json())
  .then(response => {
    data = response;
    console.log(data);
  });
