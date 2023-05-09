const contaienr1 = document.querySelector('.contaienr1');
const contaienr2 = document.querySelector('.contaienr2');

contaienr1.addEventListener('click', () => {
      alert('Felicidades eres la persona mas suertuda del mundo');
})
contaienr2.addEventListener('click', () => {
         const top = Number(Negatividad(RandomNumber(200, 5)));
const left =  Number(Negatividad(RandomNumber(200, 5)));
console.log({top, left});
          contaienr2.setAttribute('style', `top: ${top}px; left:${left}px`)
})
function RandomNumber(max, min){
const random = Math.round(Math.random() * ((max - min) + min))
return random
}
function Negatividad(numero){
          const Probabilidad = RandomNumber(100, 1);
          if(Probabilidad < 50){
                return    numero = numero * -1;
          }else{
                  return  numero = numero * 1;
          }
}
// const xd = RandomNumber(1000, 50);

// const num = Negatividad(50);
// alert(Negatividad(xd));