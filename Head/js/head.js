
    function header(){
    const cabeza= document.createElement ('header');
    const newLocal = '<p>¡Bienvenidos/as a Guifos.com! ——————Donde los gifs están.////// Número de visitas: 12.765.803</p></div>';
    let day = 'day';
    let head = 'head';
    let nigth='nigth';
    cabeza.innerHTML = `<div class=${day} id=${head}>${newLocal}`;
    document.body.appendChild (cabeza);
    document.body.style.background = '#FEF4FD';
    }
    header();
    