//document.body.onload = addElement;

window.onload = carga;


let ctnmenusecsec = 'ctn-menu-sec-sec';
let menusecsec = 'menu-sec-sec';
//let ctnmenuprisec = 'ctn-menu-pri-sec';

//const listSailor = ['Sailor Day','Sailor Nigth'];
const menunav = document.createElement ('nav');
const meul = document.createElement ('ul');
const li1= document.createElement ('li');
const li2= document.createElement ('li');
const button1 = document.createElement('button')
const button2 = document.createElement('button');


menunav.classList = ctnmenusecsec;
menunav.id = 'ctn-menu-pri-sec';
menunav.style.display = 'none';

meul.classList = menusecsec;


menunav.appendChild(meul);
meul.appendChild(li1);
meul.appendChild(li2);

li1.appendChild(button1);
li2.appendChild(button2);

button1.type = 'button';
button1.classList = 'rectangular rect-day'; 
button1.id = 'day';
//button1.value = 'day';
//button1.onclick ="sailorDay()";
button1.innerHTML = '<u>S</u>ailor Day';

button2.type = 'button';
button2.classList = 'rectangular rect-day'; 
button2.id = 'nigth';
//button2.value ='nigth';
//button2.GlobalEventHandlers.onclick ="sailorNigth()";
button2.innerHTML = '<u>S</u>ailor Nigth';



document.body.appendChild(menunav)

