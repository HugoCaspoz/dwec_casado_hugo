let texto = document.getElementById('texto')
let idiomaTexto = document.getElementById('idiomadelTexto');
let idiomaTraducir = document.getElementById('idiomaTraducir')
let textoTraducido = document.getElementById('textoTraducido');

document.getElementById('traducirTexto')
        .addEventListener('click', traducir)

function traducir(){
  let url = `https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=${idiomaTexto.value}|${idiomaTraducir.value}&q=${texto.value}&mt=1&onlyprivate=0&de=a%40b.c`;
  console.log(url);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1d42143635msh8f800602a00d5a7p1fd8d8jsn83f8b5671d88',
      'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
    }
  };
  fetch(url, options)
    .then(res => res.json())
    .then(response => {
      data = response;
      console.log(data.responseData.translatedText);
      textoTraducido.innerHTML=data.responseData.translatedText;

    })
}
