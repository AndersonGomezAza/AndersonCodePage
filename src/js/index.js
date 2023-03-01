/* MODO NOCTURNO */
const body = document.querySelector('body'),
reloj = body.querySelector(".reloj"),
modeSwitch = body.querySelector(".cambio-modo"),
modeText = body.querySelector(".modo-texto"),
btnDarkMode = body.querySelector("#dark-mode-desing");

modeSwitch.addEventListener("click" , () =>{
  body.classList.toggle("dark");
  
  if(body.classList.contains("dark")){
    modeText.innerText = 'Modo Claro';
  }else{
    modeText.innerText = 'Modo Nocturno';
  }
});

btnDarkMode.addEventListener("click" , () =>{
  body.classList.toggle("dark");
});

/* RELOJ */
const playReloj = () => {
  setInterval(()=>{
    let hora = new Date().toLocaleTimeString();
    reloj.innerHTML = `<h2>Hora ${hora}</h2>`;
  })
}
playReloj();

/* CAMBIO DE PALABRA */
var words = ['FrontEnd', 'BackEnd', 'Fotografo', 'FullStack', 'Coder', 'Desarrollador'],
    palabraCambiante = document.getElementById('palabra-cambiante'),
    palabraCambianteContenido = palabraCambiante.innerHTML,
    validacionPalabra = false,
    contadorPalabra = 0;

setInterval(function(){
  if(palabraCambianteContenido.length > 0 && !validacionPalabra ) {
    palabraCambiante.innerHTML = palabraCambianteContenido.slice(0, -1);
    palabraCambianteContenido = palabraCambiante.innerHTML;
  } else {
    validacionPalabra = true;
  }

  if( validacionPalabra ){
    if( palabraCambianteContenido.length < words[contadorPalabra].length  ) {
      palabraCambiante.innerHTML = words[contadorPalabra].slice(0, palabraCambianteContenido.length + 1);
      palabraCambianteContenido = palabraCambiante.innerHTML;
    } else {
      if( contadorPalabra < words.length) {
        contadorPalabra ++
      }
      validacionPalabra = false;
    }
  }

  if( contadorPalabra == words.length) {
    contadorPalabra = 0;
  }
}, 180);

/* IR ARRIBA */
const arriba = document.getElementById('ir-arriba');

window.addEventListener('scroll', ()=> {
  if (window.scrollY > 400) {
    arriba.classList.add('active');
  } else {
    arriba.classList.remove('active');
  }
})
arriba.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

/* MOSTRAR MENU */
const btnMenu = document.getElementById('open-menu');
const asideMenu = document.getElementById('aside-info');

btnMenu.addEventListener('click',()=> {
  asideMenu.classList.toggle('open-menu-aside');
})
/* CERRAR MENU */
const menuClose = document.getElementById('close-menu');

menuClose.addEventListener('click',()=> {
  asideMenu.classList.remove('open-menu-aside');
})

/* ALERTA CONTACTAME */
const btnContact = document.getElementById('btn-contact'),
nameContact = document.getElementById('nameContact'),
emailContact = document.getElementById('emailContact'),
messageContact = document.getElementById('messageContact');
btnContact.addEventListener('click',()=>{
  if (nameContact.value !== "" && emailContact.value !== "" && messageContact.value !== "") {
    alert('Gracias por tu mensaje pronto contactare contigo. 🙏✨🎉');
  }
})