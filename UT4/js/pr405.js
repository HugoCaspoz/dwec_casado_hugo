let li = document.querySelectorAll('li');
let links= 'https://google.com https://duckduckgo.com ttps://www.bing.com https://www.ecosia.org/ https://www.wolframalpha.com/';
links=links.split(" ");
li.forEach((item, index ) => {
    let a = document.createElement('a');
    a.textContent =  item.textContent;
    a.href=links[index];
    item.textContent="";
    item.append(a);
});