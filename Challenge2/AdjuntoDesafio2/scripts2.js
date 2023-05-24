//formulario
const form = document.getElementById('form1')
const body = document.querySelector('#body');
//inputs
const inputs = document.querySelectorAll('#form1 input');
const expresiones = {//objeto con todas las expresiones regulares
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	clave: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[0-9]{11}$/ // 11 numeros numeros.
}
const campos = {
    usuario: false,
    nombre: false,
    clave: false,
    correo: false,
    telefono: false,
}
function validarCampo(expresion, input, campo){
    if(expresion.test(input)){
        campos[campo] = true;
        console.log(`Funciona ${input}`)
    }else{
        campos[campo] = false;    
    }

}
const validarFormulario = (e)=>{
    // value = e.target.value
    switch(e.target.name){
        case 'nombre':
                validarCampo(expresiones.nombre, e.target.value, 'nombre');
        break;
        
        case 'clave':
                validarCampo(expresiones.clave, e.target.value, 'clave');
        break;
        
        case 'correo':
            validarCampo(expresiones.correo, e.target.value, 'correo');
        break;
        
        case 'telefono':
            validarCampo(expresiones.telefono, e.target.value, 'telefono');
        break;        
    }
}
inputs.forEach((input) => {
    //el evento keyup detecta cuando la tecla se levanta 
        input.addEventListener('keyup',validarFormulario);
        input.addEventListener('blur', validarFormulario);
})
form.addEventListener('submit', (e)=>{
	e.preventDefault();
    validacionTotal();
	
})
function ValidarSelect(select){// la variable es la seleccion que se desea annadir
    select = Number(select)
    if(select <= 0 || select == NaN){
      alert('indica una opccion');
      return false;
    }else{
      return true
    }
  }
function validacionTotal(){
    let changeFondo = null;
    if(campos.nombre && campos.clave && campos.correo && campos.telefono && ValidarSelect(form.ciudad) && form.terminos.checked){
         changeFondo = body.classList.add('bg-success');
    }else{
        changeFondo = body.classList.add('bg-danger');
        alert('datos faltantes o mal colocados');
    };
    setTimeout(()=>{
        changeFondo
    },5000)
}
