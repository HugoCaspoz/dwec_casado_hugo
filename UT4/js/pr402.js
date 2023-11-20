let months = document.getElementById("months");
let meses= ["",'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
for (let a = 1; a <= 12; a++) {
    months.innerHTML += `<div class="month">
                            <div class="month-number">${a}</div>
                            <div class="month-name">${meses[a]}</div>
                        <div>`;
}