const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.textContent = 'chao mundo';
body.appendChild(h1);
h1.addEventListener('click', removerHijo);
function removerHijo(){
  // h1.parentChild.removeChild(h1);
  h1.parentElement.removeChild(h1);

}

