function notificarFade(){
    alert('fade finalizado');
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
    $(this).closest('.card-fade').fadeOut(2000,'linear', notificarFade);//uso de callback
    console.log(    $(this).closest('.card'))
    })
//Slide    
    $('.card-slide a').click(function(){
        event.preventDefault();
        $(this).closest('.card-slide').slideUp()
        // $(this).closest('.card-slide').slideUp(5000);//pueba de detener animaciones 
        $('#btnSlide').slideDown(1500);
    })
    // $('.card-slide').dblclick(function(){
    //     //funcion de prueba para detener animaciones
    //     $(this).stop();
    // })
    $('#btnSlide').click(function(){
        event.preventDefault();
        $('.card').slideDown();
        $(this).slideUp();
      
        //Ponerlo como un menu hamburguesa
        // $('.card').slideToggle(); 
    })
//Animate card-aimate
    $('.card-animate a').click(function(){
        console.log('hola')
        $(this).closest('.card-animate').animate({
            'top': '100px',
        })
    })

}) 