class Card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({
            mode: "open",
        })
    }

    static get observedAttributes() {
        return ["name", "age", "image", "create"]
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    connectedCallback() {
        const template = `
            <link rel="stylesheet" href="card.css">
            <img src="${people.image}" alt="Avatar" style="width: 100%">
            <div class="container">
                <p><b>Name:</b> ${people.name}</p> 
                <p><b>Age:</b> ${people.age}</p>
                <p><b>Created at:</b> ${people.created}</p>
            </div>
        `
        this.shadow.innerHTML = template;
    }

    get name() {
        return this.getAttribute("name");
    }
    set name(val) {
        this.setAttribute("name", val);
    }

    get age() {
        return this.getAttribute("age");
    }
    set age(val) {
        this.setAttribute("age", val);
    }
    
    get image() {
        return this.getAttribute("image");
    }
    set image(val) {
        this.setAttribute("image", val);
    }

    get create() {
        return this.getAttribute("create");
    }
    set create(val) {
        this.setAttribute("create", val);
    }
}

window.customElements.define('custom-card', Card)




