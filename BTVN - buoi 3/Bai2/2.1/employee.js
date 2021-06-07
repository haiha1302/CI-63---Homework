class Employee {
    constructor(id, name, image, created_at) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._created_at = created_at;
    }

    set id(value) {
        this._id = value
    }
    get id() {
        return this._id
    }

    set name(value) {
        this._name = value
    }
    get name() {
        return this._name
    }

    set image(value) {
        this._image = value
    }
    get image() {
        return this._image
    }

    set created_at(value) {
        this._created_at = value
    }
    get created_at() {
        return this._created_at
    }

    show() {
        return `Id: ${this._id} \nName: ${this._name} \nImage: ${this._image} \nCreated_at: ${this._created_at}`
    }

    getInfor() {
        return `
            <div class="card" id="card">
                <span  class='close'>&times</span>
                <div class="content">
                <img src="${this._image}" alt="Avatar" style="width: 100%;">
                    <div class="content">
                        <p><b>Id: </b>${this._id}</p>
                        <p><b>Name: </b>${this._name}</p> 
                        <p><b>Created at: </b>${this._created_at}</p>
                    </div>
                </div>
            </div>
        `
    }
}

export default Employee