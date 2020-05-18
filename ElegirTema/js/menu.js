window.onload = carga;

function carga() {
    //document.onclick = mostarOcultar;
    document.getElementById('day').onclick = sailorDay;
    document.getElementById('nigth').onclick =sailorNigth;
}

function mostar(){
    document.getElementById('ctn-menu-pri-sec').style.display='block';
}
function ocultar(){
    document.getElementById('ctn-menu-pri-sec').style.display='none';
}



function mostarOcultar (){
        caja= document.getElementById('ctn-menu-pri-sec');
        if(caja.style.display == "none")
        {
            mostar();

        }
        else
        {
            
            ocultar();
        }

}

function sailorDay(){
    valorDay =document.getElementById('day');
    valorNigth =document.getElementById('nigth');
    if(valorDay.value == "nigth")
    {
        valorDay.value = "day";
        valorNigth.value = "day";
        //console.log(valorDay.value)
        
        document.getElementById("nigth").className = document.getElementById("nigth").className.replace ("rect-nigth","rect-day");
        document.getElementById("day").className = document.getElementById("day").className.replace ("rect-nigth","rect-day");
        document.getElementById ("boton-day").className =  document.getElementById ("boton-day").className.replace ("nigth","day");
        document.getElementById ("img-day").className =  document.getElementById ("img-day").className.replace ("nigth","day");

    }
    // console.log (document.getElementById("menu-sec-sec"));
    
}

function sailorNigth(){
    valorDay = document.getElementById('day');
    valorNigth = document.getElementById('nigth');
        //console.log (valorDay.value);
        //console.log (valorNigth.value);
    
        if(valorNigth)
        {       
            valorDay.value = "nigth";
            valorNigth.value = "nigth";
            document.getElementById("nigth").className = document.getElementById("nigth").className.replace ("rect-day","rect-nigth");
            document.getElementById("day").className = document.getElementById("day").className.replace ("rect-day","rect-nigth");
            document.getElementById ("boton-day").className =  document.getElementById ("boton-day").className.replace ("day","nigth");
            document.getElementById ("img-day").className =  document.getElementById ("img-day").className.replace ("day","nigth");

           

        }    
      
}