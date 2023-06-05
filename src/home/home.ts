import { getCleanedUpContentContainer, imageHandler} from "../utils"; './utils';
import style from "./../style.module.css";
import picture from "./../../assets/home_chef.jpg";
import localStyle from "./home.module.css";

function render(){
    const container = getCleanedUpContentContainer();
    container.appendChild(createContent());
}

function createContent(){
    const content = document.createElement('section');
    
    const heading = document.createElement('h1');
    heading.textContent = "Lorem ipsum dolor!";
    content.appendChild(heading);
    
    const text = document.createElement('p');
    text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda quaerat eveniet dolores sit neque harum, quisquam libero commodi asperiores ea quam distinctio voluptatem fuga perferendis vero minima maxime facilis.";
    content.appendChild(text);
    
    const image = new imageHandler(picture);
    image.addClassToImage(localStyle.img);
    content.appendChild(image.figure);
    
    content.classList.add(style.bgSemiTransparentWhite);

    return content;
}

export default render;