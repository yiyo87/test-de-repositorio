//la idea de todo estos es tratar de recuperar todos los elementos de la pagina 
//una vez hecho eso se puede ir agregando propiedadades o aplicar funciones de css 

function myFunction() {
    var element = document.body;
    //tengo que recuperar la clase header
    var elementheader =  document.header;
    element.classList.toggle("dark-mode");
    elementheader.classList.toggle("dark-mode");
}

function click(){
    var hacerclick = "hola loco";
    console.log(hacerclick);
}