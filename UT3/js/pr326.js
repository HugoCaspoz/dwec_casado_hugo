let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWES: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
]

function getUnsecurePass(arr){
    return arr.filter(alumno => {
        let mayus = /[A-Z]/.test(alumno.pass);
        let minus = /[a-z]/.test(alumno.pass);
        let digito = /\d/.test(alumno.pass);
        let longitud = alumno.pass.length >= 8;

        return !(mayus && minus && digito && longitud);
    }).map(alumno => `${alumno.nombre} ${alumno.ape1} ${alumno.ape2}`);
}
getUnsecurePass(arr)