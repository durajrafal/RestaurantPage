import { getCleanedUpContentContainer, imageHandler } from "../utils"; './utils'
import style from "./../style.module.css";
import data from "./menu.csv";
import localStyle from "./menu.module.css";
import picture from "./../../assets/pizza_bg.svg";
import picture2 from "./../../assets/home_chef.jpg";


function render(){
    const container = getCleanedUpContentContainer();
    container.appendChild(createContent());
}

type MenuData = {
    name: string;
    ingredients: string;
    price: number
}

function createContent(){
    const content = document.createElement('section');
    const dataArr = data as Array<MenuData>;
    dataArr.forEach(item => content.appendChild(createMenuItem(item)));

    content.classList.add(style.bgSemiTransparentWhite);
    content.classList.add(localStyle.menuList);
    return content;
}

function createMenuItem(menu: MenuData){
    const article = document.createElement('article');
    const description = document.createElement('div');
    article.appendChild(description);

    createHeadingPart(menu, description);
    createIngredientsPart(menu, description);

    createPricePart(menu, article);

    article.classList.add(style.bgSemiTransparentWhite);
    article.classList.add(localStyle.menuItem);
    return article;
}

function createHeadingPart(menu: MenuData, parent: HTMLElement){
    const heading = document.createElement('h1');
    heading.textContent = menu.name;
    const image = new imageHandler(picture);

    parent.appendChild(heading);
    parent.appendChild(image.figure);
}

function createIngredientsPart(menu: MenuData, parent: HTMLElement){
    let ingredientsText: string;
    const pIngredients = document.createElement('p');
    const ingredients = menu.ingredients.split(';');
    const regexForSpace = / /g;
    let ingredientsFormatted: Array<any>;
    ingredientsFormatted = ingredients.map(i => i.replace(regexForSpace, "\u00a0"));
    
    pIngredients.textContent = ingredientsFormatted.join(', ');
    parent.appendChild(pIngredients);
}

function createPricePart(menu: MenuData, parent: HTMLElement){
    const pPrice = document.createElement('p');
    pPrice.textContent = menu.price.toFixed(2)+' zł';
    pPrice.classList.add(localStyle.menuPrice);
    parent.appendChild(pPrice);
}

export default render;