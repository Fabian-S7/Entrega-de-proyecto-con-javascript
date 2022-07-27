// Primera entrega: Simulador de venta de Mangas de distintos idiomas.


const sumarIva = (precio) => {return precio + (precio * 0.45)}
const mostrarMensaje = (mensaje) => { alert(mensaje) }


let plataforma = parseInt(prompt("Ingrese el numero correspondiente para ver el catálogo de la consola seleccionada \n 1)Mangas-Spanish. \n2)Mangas-English." ))

main ();
function main (){
    if (plataforma == 1) {
        MangasSpanish ();
        ValorMangasES ();
    }

    else if (plataforma == 2){
        mangasenglish ();
        valormangasen ();
    }

    else 
    console.log ("ingrese un número válido.")
    
}

function MangasSpanish () {
    console.log ("1)HORIMIYA-Vol.16.ES \n 2)A DISEASE CALLED LOVE-Vol.4.ES \n 3)MY HERO ACADEMIA VIGILANTE-Vol.10.ES \n 4)CAFÉ LIEBE-Vol.05.ES \n 5)HIGEHIRO-Vol.03.ES \n 6)THE KILLER INSIDE-Vol.04.ES")
}

function mangasenglish () {  
    console.log ("1)HORIMIYA-Vol.16.EN. \n 2)A DISEASE CALLED LOVE 4.EN. \n 3)MY HERO ACADEMIA VIGILANTE-Vol.10.EN. \n 4)CAFÉ LIEBE-Vol.05.EN. \n 5)HIGEHIRO-Vol.03.EN. \n 6)THE KILLER INSIDE-Vol.04.EN")
} 




//Consultar precio Mangas-Spanish.


preciodelManga = 0;


function ValorMangasES () {

 let precioMangasES = prompt("Elija el numero  correspondiente al manga para saber su precio \n 1)HORIMIYA-Vol.16.ES \n2) A DISEASE CALLED LOVE-Vol.4.ES \n3)MY HERO ACADEMIA VIGILANTE-Vol.10.ES \n4) CAFÉ LIEBE-Vol.05.ES \n 5)HIGEHIRO-Vol.03.ES \n 6)THE KILLER INSIDE-Vol.04.ES \nPresione 'EXIT' para salir.")

    if  (precioMangasES == 1){
    
        preciodelManga = sumarIva (900)
    
                mostrarMensaje("HORIMIYA-Vol.16.ES tiene un costo final de " +preciodelManga);
                cantidadPorUnidad();
                

    }
    else if (precioMangasES == 2){
        preciodelManga = sumarIva (950)
    
                 mostrarMensaje ("A DISEASE CALLED LOVE-Vol-4.ES tiene un costo final de " +preciodelManga);
                 cantidadPorUnidad();
    }

    else if (precioMangasES == 3){
        
        preciodelManga = sumarIva (800)

                mostrarMensaje ("MY HERO ACADEMIA VIGILANTE-Vol.10.ES tiene un costo final de " +preciodelManga);
                cantidadPorUnidad();
    }
        
    else if (precioMangasES == 4){
        
        preciodelManga = sumarIva (750)
                mostrarMensaje ("CAFÉ LIEBE-Vol.05.ES tiene un costo final de " +preciodelManga)
                cantidadPorUnidad();
    }

    else if (precioMangasES == 5){
        
        preciodelManga = sumarIva (1050)
                mostrarMensaje ("HIGEHIRO-Vol.03.ES tiene un costo final de " +preciodelManga)
                cantidadPorUnidad();
    }


    else if (precioMangasES == 6){
        
        preciodelManga = sumarIva (950)
                mostrarMensaje ("THE KILLER INSIDE-Vol.04.ES tiene un costo final de " +preciodelManga)
                cantidadPorUnidad();
    }

    else if (precioMangasES == "EXIT" || precioMangasES == "exit") {
            return false;
    }


    else {
        mostrarMensaje ("No tenemos ese manga por el momento")
    }

    
    ValorMangasES ();    
}




//Consultar precios Mangas-English 


function valormangasen () {

 let precioMangasEN = prompt("Elija el numero  correspondiente al manga para saber su precio \n 1)HORIMIYA-Vol.16.EN \n 2)A DISEASE CALLED LOVE-Vol.4.EN \n 3)MY HERO ACADEMIA VIGILANTE-Vol.10.EN \n 4)CAFÉ LIEBE-Vol.05.EN \n 5)HIGEHIRO-Vol.03.EN \n 6)THE KILLER INSIDE-Vol.04.EN \nPresione 'EXIT' para salir.")

    if  (precioMangasEN == 1){
    
        preciodelManga = sumarIva (1000)
    
                mostrarMensaje("HORIMIYA-Vol.16.EN tiene un costo final de " +preciodelManga);

                cantidadPorUnidad();
                

    }
    else if (precioMangasEN == 2){
        preciodelManga = sumarIva (1150)
    
        mostrarMensaje ("A DISEASE CALLED LOVE-Vol.4.EN tiene un costo final de " +preciodelManga);
        cantidadPorUnidad();
    }

    else if (precioMangasEN == 3){
        
        preciodelManga = sumarIva (900)

            mostrarMensaje ("MY HERO ACADEMIA VIGILANTE-Vol.10.EN tiene un costo final de " +preciodelManga);
            cantidadPorUnidad();
    }
        
    else if (precioMangasEN == 4){
        
        preciodelManga = sumarIva (850)
            mostrarMensaje ("CAFÉ LIEBE-Vol.05.EN tiene un costo final de " +preciodelManga)
            cantidadPorUnidad();
    }
    
    else if (precioMangasEN == 5){
        
        preciodelManga = sumarIva (950)
            mostrarMensaje ("HIGEHIRO-Vol.03.EN tiene un costo final de " +preciodelManga)
            cantidadPorUnidad();
    }

    else if (precioMangasEN == 6){
        
        preciodelManga = sumarIva (850)
            mostrarMensaje ("THE KILLER INSIDE-Vol.04.EN tiene un costo final de " +preciodelManga)
            cantidadPorUnidad();
    }

    else if (precioMangasEN == "EXIT" || precioMangasEN == "exit") {
        return false;
    }


    else {
        mostrarMensaje ("No tenemos ese manga por el momento")
    }
    
    valormangasen ();  
}


//Calcular costo por cantidad del mismo manga.

function cantidadPorUnidad () {

    let Cantidad = parseInt(prompt("Ingresa la cantidad de copias del manga que deseas. Debes repetir la acción por cada manga que selecciones."));
    
    for (i = 1; i <= Cantidad; i++) {     
        let resultado = preciodelManga * i ;

        console.log(preciodelManga, " X "+ i +" = "+ resultado);
    }

}