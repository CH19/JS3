$(function(){
    // $('a').click(function(){//bloquear que las anclas redireccionen
    //     event.preventDefault();
    // })
    $('.categories .thumb a').click(function(){//seleccionar al contenedor de las imagenes
        $(this).empty();
    })
    $('.most-played .row div').click(function(){
        // console.log('hola mundo');
        // console.log($(this));
        $(this).fadeOut(1000);
    })
    $('.thumb').click(function(){
        // console.log(`hola mundo`);
        $(this).find('.price').slideUp();
        // $(`${this} > .price`).slideToggle();
    })
    $('.down-content a').click(function(){
        $(this).css({'background-color':'green'}).slideUp(3000)
    })
    $('.features .col-lg-3').click(function(){//funcion para ineractuar con los freatures
        $(this).animate({'width': '270px',
            'height': '270px',
            'top': '-300px',
            'left': '300px'}).css('position', 'relative');
    })
})