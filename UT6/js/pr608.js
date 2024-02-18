let arr = [
    {
        comunidad:'Seleccione una comunidad',
        provincias: ['Seleccione una Provincia']
    },
    {
      comunidad: 'Andalucía',
      provincias: [
        { provincia: 'Almería', localidades: [1, 2] },
        { provincia: 'Cádiz', localidades: [1, 2] },
        { provincia: 'Córdoba', localidades: [1, 2] },
        { provincia: 'Granada', localidades: [1, 2] },
        { provincia: 'Huelva', localidades: [1, 2] },
        { provincia: 'Jaén', localidades: [1, 2] },
        { provincia: 'Málaga', localidades: [1, 2] },
        { provincia: 'Sevilla', localidades: [1, 2] }
      ]
    },
    {
      comunidad: 'Aragón',
      provincias: ['Huesca', 'Teruel', 'Zaragoza']
    },
    {
      comunidad: 'Asturias',
      provincias: ['Asturias']
    },
    {
      comunidad: 'Islas Baleares',
      provincias: ['Islas Baleares']
    },
    {
      comunidad: 'Canarias',
      provincias: ['Las Palmas', 'Santa Cruz de Tenerife']
    },
    {
      comunidad: 'Cantabria',
      provincias: ['Cantabria']
    },
    {
      comunidad: 'Castilla-La Mancha',
      provincias: ['Albacete', 'Ciudad Real', 'Cuenca', 'Guadalajara', 'Toledo']
    },
    {
      comunidad: 'Castilla y León',
      provincias: ['Ávila', 'Burgos', 'León', 'Palencia', 'Salamanca', 'Segovia', 'Soria', 'Valladolid', 'Zamora']
    },
    {
      comunidad: 'Cataluña',
      provincias: ['Barcelona', 'Girona', 'Lleida', 'Tarragona']
    },
    {
      comunidad: 'Comunidad Valenciana',
      provincias: ['Alicante', 'Castellón', 'Valencia']
    },
    {
      comunidad: 'Extremadura',
      provincias: ['Badajoz', 'Cáceres']
    },
    {
      comunidad: 'Galicia',
      provincias: ['A Coruña', 'Lugo', 'Ourense', 'Pontevedra']
    },
    {
      comunidad: 'Madrid',
      provincias: ['Madrid']
    },
    {
      comunidad: 'Región de Murcia',
      provincias: ['Murcia']
    },
    {
      comunidad: 'Navarra',
      provincias: ['Navarra']
    },
    {
      comunidad: 'País Vasco',
      provincias: ['Álava', 'Gipuzkoa', 'Bizkaia']
    },
    {
      comunidad: 'La Rioja',
      provincias: ['La Rioja']
    }
  ];

let comunidades = document.getElementById("comunidades");
comunidades.addEventListener("change", selectCom)
 arr.forEach(item => {
    comunidades.innerHTML+=`<option id="${item.comunidad} "value="${item.comunidad}">${item.comunidad}</option>`;
    
    
});

 function selectCom(e){
    e.preventDefault()
    let provincias = document.getElementById('provincias')
    provincias.addEventListener("change", selectProvincia)

    let comunidad=e.target.value
    let comSeleccionada=arr.find(item=>item.comunidad==comunidad);
    provincias.innerHTML='';
    comSeleccionada.provincias.forEach(provincia => {
        provincias.innerHTML+=`<option id="${provincia.provincia}" value="${provincia.provincia}">${provincia.provincia}</option>`;
        console.log(provincia);
    });
    function selectProvincia(e){
      e.preventDefault();
      let localidades=document.getElementById('localidades');
      let provincia = e.target.value
      console.log(comSeleccionada);
      let provinciaSelect=comSeleccionada.provincias.find(item=>item.provincia==provincia);
      console.log(provinciaSelect);

      provinciaSelect.localidades.forEach(localidad => {
        localidades.innerHTML+=`<option id="${localidad}" value="${localidad}">${localidad}</option>`;
        console.log(localidad);
    })
    }
 }