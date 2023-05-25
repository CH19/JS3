$(function(){ //aso se declara Jquery
    $('.container1 > div').click(function(){//cuando demos click se activara esta funcion en los elementos html cuyo selector css coincida
        
        //con este metodo colocamos texto al contenido de la funcion
        $(this).text('hola mundo');
        // alert('me tocaron')
    })
    $('#buscador').hover(function(){//cuando hagamos hover se activara el contenido de la funcion
      
        //con esta funcion establecemos codigo css en el selector css
        $(this).css('box-shadow','1px 3px black');
    });
       
    //el metodo attr annade un atributo al elemento html
    $('a').attr('href', 'https://www.youtube.com/watch?v=JBb2rBuyKhQ');//video de igor con kanye, es un ejemplo
  
    //practica sugerida por el profesor
    //hacer que al dar al boton del formulario el contenido de los inputs este en la consola
    //cambiar texto del boton por cambiar sesion
    //agregar al h3 del form el nombre del usuario
    $('form').submit(function(event){
    //    console.log($(`${this} > input`).val());
    event.preventDefault()  
    const date = [
        $('#user-Input').val(),       
        $('#email-Input').val(),   
        $('#password-Input').val(),    
        $('#phone-Input').val()      
    ]

    alert('enviado');
    console.log(date);  //objetivo 1 
    $('#btnFormulario').val('cambiar sesion');//obj 2
    $('h3').text(`Bienvenido ${$('#user-Input').val()}`)//obj 3
    });
    $('#email-Input').dblclick(function(){
        $(this).removeAttr('diabled');
    })
   
})
// box-shadow: 1px 3px black;
