function Actions(){
    
    var $ = document;
    
    this.eliminarArticulo = () => {
        $.querySelector('.article').remove();
    };
    
    this.eliminarTodoArticulo = () => {
        var art = $.querySelectorAll('.article');
        for (var i = 0; i < art.length; i++) {
            art[i].remove();
        }
    };
    
    this.generarArticulos = () => {
        const ag = new JsonArticleGenerator(); //Article Generator (ag)
        ag.generarArticulos('articulos', 'data');
    };
    
    this.insertarMensaje = () => {
        var msj = $.createElement('DIV');
        msj.id = "mensaje-generado";
        msj.innerHTML = "ELEMENTO Y MENSAJE GENERADOS DESDE JS";
        msj.classList.add('mensaje-generado');
        $.body.insertBefore(msj, $.body.firstChild);
    };
    
    this.eliminarMensaje = () => {
        $.getElementById('mensaje-generado').remove();
    };
    
    this.cambiarFondo = () => {
        $.body.style.background = "#ff4500";
    };
    
    this.cambiarTipografia = () => {
        $.body.style.fontFamily = "Serif";
    };
    
    this.toggle = (element) => {
        if (element.style.display === 'none') {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    };
    
    this.flexToggle = (element, display) => {
        if (display === 'block' || display === 'flex') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        } 
    };
    
    this.toggleArticulo = () => {
        this.toggle(document.getElementById('articulos'));
    };
        
    this.menuResponsive = () => {
        var element = $.querySelector('.aside');
        var display = element.style.display;
        this.flexToggle(element, display);
    };
    
    this.desenfocarArticulo = () => {
        $.getElementById('articulos').classList.add('blured');
    };
    
    this.enfocarArticulo = () => {
        $.getElementById('articulos').classList.remove('blured');
    };

    

}