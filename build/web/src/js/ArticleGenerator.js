function ArticleGenerator(){

    this.generate = (obj, data) => {
          return '<article class="article" elevation="1"><div class="img-articulo"><img src="src/img/' + data[obj].imagen + '" /></div><div class="cuerpo-articulo"><h3>' + data[obj].titulo + '</h3><div class="descripcion-articulo">' + data[obj].descripcion + '</div><div class="botones-articulo"><a href="' + data[obj].link + '.html">' +data[obj].txtBoton + '</a></div></div></article>';  
    };

}


