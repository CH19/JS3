const body = document.querySelector('body');
function h1Start (){
const h1 = document.createElement('h1');
h1.textContent = 'chao mundo';
}
body.appendChild(h1);
h1.addEventListener('click', removerHijo);
function removerHijo(){
  body.removeChild(h1);
}
const boton = document.createElement('button');
boton.textContent = 'volver aparecer'
boton.addEventListener('click', h1Start);
array.forEach(element => {
    
});

        