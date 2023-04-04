/*Lista con los datos del cliente*/
const cedula = document.getElementById('cedula'); 
const nombre = document.getElementById('nombre'); 
const telefono = document.getElementById('telefono'); 
const direccion = document.getElementById('direccion'); 
const ul = document.querySelector('.lista');

const Users = []
const btn_primary = document.querySelector('.btn-primary');
btn_primary.addEventListener('click', () => { //Funcion para agregar contneido a la lista

    const user = { /** para poder organizar mejor las propiedades de toda la lista */
        Id: cedula.value,
        name: nombre.value,
        phone: telefono.value,
        direction: direccion.value
    };
    if(cedula.value)
Users.push(user); /*si en algun momento se desean ver todos los objetos*/
let contentLi = ""; /**Poner una varibale en la que este todo el contenido de la lista */
Object.keys(user).forEach(e => {
    /*unificar esta variable para que toda la lista pueda estar en la misma linea*/ 
    contentLi += user[e] + ', ';
})
const li = document.createElement('li');
    li.textContent = contentLi;
    console.log(contentLi);
    // li.textContent = e.entries;
    ul.appendChild(li);
    li.addEventListener('dblclick', suicidio);
cedula.value = " ";
nombre.value = " ";
telefono.value = " ";
direccion.value = " ";
});
const codig = document.getElementById('codig');
const descripcion = document.getElementById('descripcion');
const precio = document.getElementById('precio');
const cantidad = document.getElementById('cantidad');
const btn_success = document.querySelector('.btn-success');

btn_success.addEventListener('click', () => {
    const data = [ //se creo arreglo para cumplir con el requirimiento
        codig.value, descripcion.value, precio.value, cantidad.value
    ]
    console.log(data);
    const tableBody = document.querySelector('.tableBody');
    const tr = document.createElement('tr');
    data.forEach(e => {
        const  td = document.createElement('td');
        td.textContent = e;
        tr.appendChild(td);
        tr.addEventListener('dblclick', suicidio);
    })
    codig.value = " "
    descripcion.value = " "
    precio.value = " "
    cantidad.value = " "
    tableBody.appendChild(tr);
});
function suicidio(){
    if(confirm('Desea eliminar el elemento')){
        this.parentNode.removeChild(this);
    }else{

    }
}

/*Me gusto como quedo, no se valido la informacion de ninguna forma, ni de si habian numeros, etc porque no fue solicitado en el desafio*/