//HEAD 
const head = document.querySelector('head');
console.log(head);
//Articulos
const ARTICULO_01 = document.querySelector(".Art1");
const ARTICULO_02 = document.querySelector(".Art2");
const ARTICULO_03 = document.querySelector(".Art3");
const ARTICULO_04 = document.querySelector(".Art4");
const ARTICULO_05 = document.querySelector(".Art5");
const ARTICULO_06 = document.querySelector(".Art6");
const ARTICULO_07 = document.querySelector(".Art7");
const ARTICULO_08 = document.querySelector(".Art8");
const ARTICULO_09 = document.querySelector(".Art9");
const ARTICULO_10 = document.querySelector(".Art10");
// console.log(ARTICULO_01.children[0].children[2].src);
//accede a Article > A > h3,p,img
function ChangeText(ObjectDOM,ObjectJSON) {
  ObjectDOM.children[0].children[0].innerHTML = ObjectJSON.title;
  ObjectDOM.children[0].children[1].innerHTML =ObjectJSON.text;
  ObjectDOM.children[0].children[2].src = ObjectJSON.src;
}
var miObject = {
  title:'Hola Mundo',
  text: "Esto no es un LoremIpsum",
  src:'/media/image-solid.svg'
}
//ChangeText(ARTICULO_01,miObject);
//funcional

//Nav Bar Inicio
const Modal = document.querySelector(".modal");
const CloseButton =
  '<button class="CloseButton" onclick="CloseModal()">Close</button>';
const MainInformation = {
  AboutThis: {
    title: "Acerca de la Pagina",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aspernatur nam reprehenderit minus, iusto ab magni maxime quod delectus deserunt corrupti minima consequatur molestiae ea commodi rem praesentium neque cupiditate.",
    image: "",
  },
  AboutUs: {
    title: "Quienes Somos?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aspernatur nam reprehenderit minus, iusto ab magni maxime quod delectus deserunt corrupti minima consequatur molestiae ea commodi rem praesentium neque cupiditate.",
    image: "",
  },
  ContactUs: {
    title: "Contactanos",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aspernatur nam reprehenderit minus, iusto ab magni maxime quod delectus deserunt corrupti minima consequatur molestiae ea commodi rem praesentium neque cupiditate.",
    image: "",
  },
  FindUs: {
    title: "Buscanos en Redes Sociales",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aspernatur nam reprehenderit minus, iusto ab magni maxime quod delectus deserunt corrupti minima consequatur molestiae ea commodi rem praesentium neque cupiditate.",
    image: "",
  },
};
function OpenModal(Information) {
  Modal.classList.add("OpenModal");
  Modal.innerHTML = CloseButton;
  Modal.innerHTML += "<h2>" + Information.title + "</h2>";
  Modal.innerHTML += `<p>${Information.text} </p>`;
}
function CloseModal() {
  Modal.classList.remove("OpenModal");
}
//Paginnation

// console.log(ARTICULO_01);
// console.log(ARTICULO_02);
// console.log(ARTICULO_03);
// console.log(ARTICULO_04);
// console.log(ARTICULO_05);
// console.log(ARTICULO_06);
// console.log(ARTICULO_07);
// console.log(ARTICULO_08);
// console.log(ARTICULO_09);
// console.log(ARTICULO_10);
