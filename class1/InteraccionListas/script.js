const body = document.querySelector('body');
const ul = document.createElement('ul');
const input = document.createElement('input')
input.type = 'text';
input.placeholder = 'escribe algo';
const send = document.createElement('input');
send.type = 'button';
send.value = 'enviar';

function enviar (){
          const valor = input.value
          const li = document.createElement('li');
li.textContent = `${valor}`;
ul.appendChild(li);
}



send.addEventListener('click', enviar)

body.appendChild(input);
body.appendChild(send);
body.appendChild(ul);
