import { getCleanedUpContentContainer, imageHandler} from "../utils";
import style from "./../style.module.css";
import picture from "./../../assets/about_map.jpg";
import localStyle from "./about.module.css";

function render(){
    const container = getCleanedUpContentContainer();
    container.appendChild(createContent());
}

function createContent(){
    const content = document.createElement('section');

    const telephone = document.createElement('p');
    telephone.textContent = "☎️ +0 123 456 789"
    content.appendChild(telephone);
    telephone.classList.add(style.boldFont);

    const address = document.createElement('p');
    address.textContent = "🚩 Piazza del Colosseo, 1, 00184 Roma RM, Włochy";
    content.appendChild(address);
    address.classList.add(style.boldFont);

    const image = new imageHandler(picture);
    image.addClassToImage(localStyle.img);
    content.appendChild(image.figure);

    content.classList.add(style.bgSemiTransparentWhite);
    return content;
}

export default render;