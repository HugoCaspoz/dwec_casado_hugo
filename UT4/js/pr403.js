let num = document.getElementById('numbers');

for (let a = 1; a <= 30; a++) {
    // Crear un nuevo elemento span
    let newSpan = document.createElement('span');
    
    // Asignar la clase 'number' al nuevo span
    newSpan.className = 'number';
    
    // Crear un nodo de texto con el número actual y adjuntarlo al span
    let numberText = document.createTextNode(a);
    newSpan.appendChild(numberText);
    
    // Agregar el nuevo span al div de números
    num.appendChild(newSpan);
}

let months = document.getElementById("months");
let meses = ["",'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

for (let a = 1; a <= 12; a++) {
    // Crear un nuevo elemento div con la clase "month"
    var newDiv = document.createElement('div');
    newDiv.className = 'month';

    // Crear un nuevo div para el número de mes y asignarle la clase "month-number"
    var monthNumberDiv = document.createElement('div');
    monthNumberDiv.className = 'month-number';
    monthNumberDiv.textContent = a;
    
    // Crear un nuevo div para el nombre del mes y asignarle la clase "month-name"
    var monthNameDiv = document.createElement('div');
    monthNameDiv.className = 'month-name';
    monthNameDiv.textContent = meses[a];
    
    // Agregar los divs al div principal con la clase "month"
    newDiv.appendChild(monthNumberDiv);
    newDiv.appendChild(monthNameDiv);
    
    // Agregar el nuevo div al contenedor de meses
    months.appendChild(newDiv);
}