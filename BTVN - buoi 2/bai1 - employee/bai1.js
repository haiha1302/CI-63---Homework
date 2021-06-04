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

const container = document.getElementById('container')
const inputId = document.getElementById('id')
const inputName = document.getElementById('name')
const inputImage = document.getElementById('image')
const inputCreatedAt = document.getElementById('created-at')

const arrEmployee = []

const newEmployee1 = new Employee(1, 'Ha__lo', 'https://i.pinimg.com/originals/48/d5/eb/48d5ebb5c96aa214ee2c585dcd5b0761.jpg', '03/06/2021')
const newEmployee2 = new Employee(2, 'Pe__heo', 'https://pbs.twimg.com/media/Ez-AaifWYAIiFSQ.jpg', '04/06/2021')

console.log(newEmployee1);
console.log(newEmployee1.show());
arrEmployee.push(newEmployee1)
container.innerHTML = newEmployee1.getInfor()

// console.log(newEmployee2);
// arrEmployee.push(newEmployee2)
// container.innerHTML = newEmployee2.getNewCard()
// console.log(newEmployee2.show());

function add() {
    let newEmployee = new Employee(inputId.value, inputName.value, inputImage.value, inputCreatedAt.value)
    console.log(newEmployee);
    arrEmployee.push(newEmployee)
    container.innerHTML = newEmployee.getInfor()
    // for (let i of arrEmployee) {
    //     console.log(i);
    // }
    getInfor()
}

function update() {
    let inputIdUpdate = prompt('Nhập Id bạn muốn update: ')
    for (let i of arrEmployee) {
        if (inputIdUpdate.value == i.id) {
            let inputNameUpdate = prompt('Nhập tên mới: ')
            let inputImageUpdate = prompt('Nhập URL image mới: ')
            let inputCreatedAt = prompt('Nhập ngày update: ')
            i.name = inputNameUpdate
            i.image = inputImageUpdate
            i.created_at = inputCreatedAt
            const newEmployeeUpdate = new Employee(i.id, inputNameUpdate, inputImageUpdate, inputCreatedAt)
            console.log(arrEmployee);
        }
    }
}
