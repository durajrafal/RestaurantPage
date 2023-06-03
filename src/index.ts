import renderHeader from "./navbar";
import renderHome from "./home";
import renderMenu from "./menu";
import renderAbout from "./about";
import "./style.module.css";
import * as style from "./style.module.css";

let header = renderHeader();
let content = document.querySelector('.content');
content?.appendChild(header);

function wireButtons(){
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', () => renderHome())
    buttons[1].addEventListener('click', () => renderMenu())
    buttons[2].addEventListener('click', () => renderAbout())
}

console.log(style);


wireButtons();