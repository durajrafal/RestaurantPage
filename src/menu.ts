function render(){
    const content = document.querySelector('.content')
    const tabContent = document.querySelector('#tab-content')
    let newContent: Element;
    if(tabContent) {
        tabContent.textContent = "";
        newContent = tabContent;
    }
    else{
        newContent = document.createElement('section');
    }
    newContent.id = "tab-content";
    const menu = document.createElement('p');
    menu.innerText = "MENU";
    newContent.appendChild(menu);
    content?.appendChild(newContent);
}

export default render;