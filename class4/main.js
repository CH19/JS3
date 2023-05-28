function notificarFade(){
    // alert('fade finalizado');
}
$(function(){//metodo ready desplegado
    $('#btnSlide').slideUp();    

    $('#ingresar').click(function(){//funcion para seleccionar y interactuar con los datos del formulario
        const inputsOpinion = $('#Contenedor1 > input').toArray();//convertimos a un array de elementos al contenido de los inputs
        inputsOpinion.forEach(e => {//recorremos todos los inputs para comprobar
            //Hacemos un condicional para heredar en el contendor respuestas el texto de la opccion en el label para saber la opccion
     //cuando el boton de click el input ratio con las opcciones creara un codigo html para decir la opccion que se selecciono
            e?.checked ?   $('.respuestas').append(`<h2>${$(e).prev().text()}</h2>`) : console.log();
    });
    const inputServicio = $('#Contendor2 > input').toArray();
    inputServicio.forEach(e => {
        e?.checked ?   $('.respuestas').append(`<h2>${$(e).prev().text()}</h2>`) : console.log();
    })
  })
//   PROBANDO ANIMACIONES 
//Fade 
    $('.card-fade a').click(function(){
    event.preventDefault();
    $(this).closest('.card-fade').fadeOut(2000);
    console.log(    $(this).closest('.card'))
    })
//Slide    
    $('.card-slide a').click(function(){
        event.preventDefault();
        $(this).closest('.card-slide').slideUp();
        $('#btnSlide').slideDown(1500);
    })
    $('#btnSlide').click(function(){
        event.preventDefault();
        $('.card').slideDown();
        $(this).slideUp();
      
        //Ponerlo como un menu hamburguesa
        // $('.card').slideToggle(); 
    })
//Animate
    $()
}) 