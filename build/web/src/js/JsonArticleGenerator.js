function JsonArticleGenerator () {
        
    this.generarArticulos = (containerId, jsonDocumentName) => {
        
        var articulos = document.getElementById(containerId);
        var article = new ArticleGenerator();
        var jsonDocument = jsonDocumentName;
        var conex = new XMLHttpRequest();
        
        conex.open("GET", "src/js/" + jsonDocument + ".json", true);
        
        conex.setRequestHeader("Content-type", "application/json", true);
        
        conex.onreadystatechange = function() {
            if(conex.readyState === 4 && conex.status === 200) {
                var data = JSON.parse(conex.responseText);
                    articulos.innerHTML = "";
                    for(var obj in data){
                        var element = article.generate(obj, data);
                        articulos.innerHTML += element;  
                    }
            }
        };
        
        conex.send(null);
        articulos.innerHTML = "<h2 style='color:white;'>Buscando Prácticas...</h2>";
    };
    
}



