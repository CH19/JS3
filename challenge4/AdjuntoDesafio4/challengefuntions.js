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


//Requerimientos desafio 4
// Bsado en la plantilla suministrada establecer con jquery los efecto requeridos.
// 1.- Programar que al dar click en los elementos "Top Categories" del index.html el elemento se mantenga pero la imagen se vacie, utilice empty() para tal fin.

// 2.- Programar que al dar click en algun elemento de "Most Played", dicho elemento se oculte. Utilice fadeOut().

// 3.- Programar que al dar click en algun articulo de "Trending Games" (exceptuando el boton con el icono de la "cartera") el span que tiene el precio se deslice por encima del articulo usando alguno de los metodos slide().

// 4.- Programar que al dar click en el boton con el icono de la cartera que se encuentra dentro de los articulos de "Trending Games" usando ecadenamiento el fondo del elemento se cambie a color verde y se deslice hacia arriba con slide(3000).

// 5.- Programar que los elementos ubicados en la parte superior identificados como: (free storage, user more, reply ready y easy layout) con el uso del metodo animate() se configuren estas caracteristicas al darles click
// width: 270px;
// height: 270px;
// top: -300px;
// left: 300px;
// position: relative;
// La propiedad posicion puede ser "encadenada" con el metodo css() si no se logra con el metodo animate()