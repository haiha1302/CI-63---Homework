import Employee from "./employee.js"
console.log(Employee);

const container = document.getElementById('container')
const inputId = document.getElementById('id')
const inputName = document.getElementById('name')
const inputImage = document.getElementById('image')
const inputCreatedAt = document.getElementById('created-at')
const btnAdd = document.getElementById('btn-add')
const btnUpdate = document.getElementById('btn-update')

btnAdd.addEventListener('click', add())
btnUpdate.addEventListener('click', update())

var arrEmployee = []

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
    console.log(newEmployee)
    arrEmployee.push(newEmployee)
    container.innerHTML = newEmployee.getInfor()
    for (let i of arrEmployee) {
        console.log(i);
    }
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
