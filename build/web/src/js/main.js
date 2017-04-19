(function(){
    
    function generarArticulos(){
        var articulos = document.getElementById("articulos");
        var conex = new XMLHttpRequest();
        conex.open("GET", "src/js/data.json", true);
        conex.setRequestHeader("Content-type", "application/json", true);
        conex.onreadystatechange = function() {
            if(conex.readyState === 4 && conex.status === 200) {
                var data = JSON.parse(conex.responseText);
                    articulos.innerHTML = "";
                    for(var obj in data){
                        var element = '<article class="article" elevation="1"><div class="img-articulo"><img src="./src/img/' + data[obj].imagen + '" /></div><div class="cuerpo-articulo"><h3>' + data[obj].titulo + '</h3><div class="descripcion-articulo">' + data[obj].descripcion + '</div><div class="botones-articulo"><a href="' + data[obj].link + '">' +data[obj].txtBoton + '</a></div></div></article>';
                        articulos.innerHTML += element;     
                    }
            }
        };
        conex.send(null);
        articulos.innerHTML = "<h2 style='color:white;'>Buscando Prácticas...</h2>";
    }
    
    
    var $ = document;
    
    $.getElementById("eliminarArticulo").addEventListener('click', function(){
       $.querySelector('.article').remove(); 
    });
    
    $.getElementById('eliminarTodoArticulo').addEventListener('click', function(){
       var art = $.querySelectorAll('.article'); 
        for (var i = 0; i < art.length; i++) {
            art[i].remove();
        }
    });
    
    $.getElementById('borrar1erArticulo').addEventListener('click', function(){
        generarArticulos();
    });
    
    $.getElementById('insertarMensaje').addEventListener('click', function(){
        var msj = $.createElement('DIV');
        msj.id = "mensaje-generado";
        msj.innerHTML = "ELEMENTO Y MENSAJE GENERADOS DESDE JS";
        msj.classList.add('mensaje-generado');
        $.body.insertBefore(msj, $.body.firstChild);
    });
    
    
    $.getElementById('eliminarMensaje').addEventListener('click', function(){
        $.querySelector('#mensaje-generado').remove();
    });
    
    
    $.querySelector('#cambiar-fondo').addEventListener('click', function(){
        $.body.style.background = "#ff4500";
    });
    
    $.getElementById('cambiar-tipografia').addEventListener('click', function(){
        $.body.style.fontFamily = "Serif";
    });
    
    $.getElementById('toggle-articulo').addEventListener('click', function(){
        var x = document.getElementById('articulos');
        if (x.style.display === 'none') {
            x.style.display = 'flex';
        } else {
            x.style.display = 'none';
        }
    });
    
    $.getElementById('desenfocar-articulo').addEventListener('click', function(){
        $.getElementById('articulos').classList.add('blured');
    });
    
    $.getElementById('enfocar-articulo').addEventListener('click', function(){
        $.getElementById('articulos').classList.remove('blured');
    });
    
    $.querySelector('.menu-responsive').addEventListener('click', function(){
        var x = $.querySelector('.aside');
        var nn = x.style.display;
        if (nn === 'block' || nn === 'flex') {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }        
    });
    
    //SOLICITA LOS ARTICULOS DEL ARCHIVO JSON
    generarArticulos();
    
})();


