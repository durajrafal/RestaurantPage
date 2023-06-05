function setUp(){
    let main = document.createElement('main');
    const body = document.querySelector('body');
    body?.appendChild(main);

    return main;
}

export function getCleanedUpContentContainer(){
    let container = document.querySelector('main')
    if(!container) {
        container = setUp();
    }
    container.textContent = "";
    return container;
}

export class imageHandler{
    figure: HTMLElement;
    private image: HTMLImageElement;

    constructor(url: string){
        this.figure = document.createElement('figure');
        this.image = document.createElement('img');
        this.figure.appendChild(this.image);
        this.image.src = url;
    }

    addClassToImage(className: string){
        this.image.classList.add(className);
    }
}