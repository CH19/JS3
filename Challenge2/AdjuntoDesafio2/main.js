//expresiones regulares solicitadas*/*/
const form = document.getElementById('form1');
const ReText = /^[A-Za-z\d@!?\-_.]{5,}$/gm
const Remail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const RePasword = /^[a-zA-Z0-9]{6,10}$/;
const RePhone = /^[0-9]+$/;
form.addEventListener('submit', (a)=>{
 console.log('hola');
  a.preventDefault(a);
  ControlForm(a)
})
function ControlForm(e){//el parametro "e" es el mismo formulario, se colocara "this" cuando se invoque la funcion
    if (
      ValidarExpresion(form.nombre, ReText) ||
      ValidarExpresion(form.correo, Remail) ||
      ValidarExpresion(form.clave, RePasword) || ValidarCheckbox(form.terminos) || !ValidarSelect(form.ciudad.value)
    ) {
      alert('falso');
      return false;
    } else {
      alert('verdadero');
      return true;
    }
}
function ValidarExpresion(campo, ExpRegular){//colocar en campo la variable con el objeto HTML
  const Re = ExpRegular;  
  if(campo.value != ""){
      alert('el input no esta vacio' + campo.name);
      if(Re.test(campo)){
        alert('el input tiene la expresion' + campo.name);
        return false;

      }else{
        alert('el input no tiene la expresion' + campo.name)
      }
    }else{
      alert(`completa los datos de ${campo.name}`)
      return true;
      
    }
}
function ValidarCheckbox(checkbox){//el parametro es la variable con el checkbox a solicitar
    if (checkbox) {
      alert("debes aceptar los terminos y condiciones");
      return false;
    } else {
      return true;
    }
  };
  function ValidarSelect(select){// la variable es la seleccion que se desea annadir
    select = Number(select)
    if(select <= 0 || select == NaN){
      alert('indica una opccion');
      return false;
    }else{
      return true
    }
  }
function Control(e, condition){
  if(e.test(condition)){
    return false
  }else{
    return true
  }
}

