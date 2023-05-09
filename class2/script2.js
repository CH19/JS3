const form = document.querySelector('form');
let inputs =  document.querySelectorAll('.form-control');
const input1 = document.querySelector('.user');
let xd = Array.from(inputs);

function Validacion(){
  // .preventDefault(); // evita el envío del formulario por defecto
  const InputsValue = xd.map(e => e[value]);
  console.log(inputs);
  console.log(xd);
  console.log(InputsValue);
}
// validar = () =>{
//     const formu = document.querySelector('form');
//   const input = formu.querySelectorAll('input');
  
//   const values = {};
//   input.forEach(input => {
//     values[input.name] = input.value;
//   });
//   console.log('click')
//   console.log(values);
// }

function ControlForm(){
  if (confirm('formulario enviado')) {
    alert('gols' + typeof(phone.value));
  } else {
    return;
  }
}

const axd = ()=>{
  console.log(input1);
  console.log(input1.value);
}

