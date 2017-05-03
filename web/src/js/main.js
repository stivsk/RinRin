(function(){
    //Maps API Key: AIzaSyBQM_sniUz-75VQ31JxmQ59mt03NGdsMIc
    var $ = document;

    var eliminarArticulo = $.getElementById("eliminarArticulo");
    var eliminarTodoArticulo = $.getElementById("eliminarTodoArticulo");
    var generarArticulos = $.getElementById("generarArticulos");
    var insertarMensaje = $.getElementById("insertarMensaje");
    var eliminarMensaje = $.getElementById("eliminarMensaje");
    var cambiarFondo = $.getElementById("cambiarFondo");
    var cambiarTipografia = $.getElementById("cambiarTipografia");
    var toggleArticulo = $.getElementById("toggleArticulo");
    var desenfocarArticulo = $.getElementById("desenfocarArticulo");
    var enfocarArticulo = $.getElementById("enfocarArticulo");
    var menuResponsive = $.querySelector('.menuResponsive');

    var menuButtons = [
        eliminarArticulo, eliminarTodoArticulo, generarArticulos, insertarMensaje,
        eliminarMensaje, cambiarFondo, cambiarTipografia, toggleArticulo,
        desenfocarArticulo, enfocarArticulo, menuResponsive
    ];

    const bl = new ButtonListenerGroup();
    bl.setButtonsListeners(menuButtons);
    
    //SOLICITA LOS ARTICULOS DEL ARCHIVO JSON
    const ag = new JsonArticleGenerator(); //Article Generator (ag)
    ag.generarArticulos('articulos', 'data'); // Nombre del padre, Nombre del archivo JSON
        
})();