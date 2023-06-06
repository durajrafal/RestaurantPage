import renderHeader from "./header";
import renderHome from "./home/home";
import renderMenu from "./menu/menu";
import renderAbout from "./about/about";
import "./style.module.css";
import * as style from "./style.module.css";

let header = renderHeader();
let body = document.querySelector('body');
body?.appendChild(header);


function wireButtons(){
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', () => renderHome())
    buttons[1].addEventListener('click', () => renderMenu())
    buttons[2].addEventListener('click', () => renderAbout())
}

console.log(style);

wireButtons();
renderMenu();