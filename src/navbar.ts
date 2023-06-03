import style from "./style.module.css"

function renderHeader(){
    let header = document.createElement('header');
    let navbar = document.createElement('nav');
    navbar.classList.add(style.bgSemiTransparentWhite);

    navbar.appendChild(createButton("Home"));
    navbar.appendChild(createButton("Menu"));
    navbar.appendChild(createButton("About"));
    header.appendChild(navbar);

    return header;
}

function createButton(name: string) {
    let btn = document.createElement('button');
    btn.textContent = name;
    return btn;
}

export default renderHeader;