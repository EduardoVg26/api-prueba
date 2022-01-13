const urlAPI = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
let contador = 0;

var valor = prompt("¿Cuántos registros quieres mostrar?")

const obtenerUsuarios = async() => {
    const resp = await fetch(urlAPI);

    const {data:usuarios} = await resp.json();
    return usuarios;
}

let tbody;
const body  = document.body;


const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5">Cards</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tipo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Race</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );


    tbody = document.querySelector('tbody');

}

const crearFilaUsuario = ( usuario ) => {
    contador++;

    const html = `
        <td scope="col"> ${contador} </td>
        <td scope="col"> ${usuario.type} </td>
        <td scope="col"> ${usuario.name} </td>
        <td scope="col"> ${usuario.race} </td>

    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody.appendChild(tr)
}


const init = async() => {  

    crearHtml();

    const usuario = await obtenerUsuarios();

    for (let index = 0; index < valor; index++) {
    crearFilaUsuario(usuario[index])        
    }
}

init();