var obj = [
    {
        name: 'Nguyễn Hải Hà',
        age: 20,
        created_at: '30/04/1975',
        image: './images/card_avatar.png'
    },
    {
        name: 'Ran Mori',
        age: 18,
        created_at: '02/09/1945',
        image: './images/card_avatar_female.png'
    }
]

let cardInfo = document.getElementById('card_info')
let userName = document.getElementById('input-name')
let userAge = document.getElementById('input-age')
let btnAdd = document.getElementById('btn-add')
var newObj = []


btnAdd.addEventListener('click', addUser)

function readObj() {
    for (let people of obj) {
        let card = `
            <img src="${people.image}" alt="Avatar" style="width: 100%">
            <div class="container">
                <p><b>Name:</b> ${people.name}</p> 
                <p><b>Age:</b> ${people.age}</p>
                <p><b>Created at:</b> ${people.created_at}</p>
            </div>
        `
        cardInfo.innerHTML += card 
    }
    obj.splice(0, obj.length)
}
readObj()

function getDate() {
    let stringDate = "";
    let newTime = new Date();
    stringDate += String(newTime.getDate()) + "-" + (Number(newTime.getMonth()) + 1) + "-" + newTime.getFullYear();
    return stringDate;
}

// let getDate = () => {
//     let stringDate = "";
//     let newTime = new Date();
//     stringDate += String(newTime.getDate()) + "-" + (Number(newTime.getMonth()) + 1) + "-" + newTime.getFullYear();
//     return stringDate;
// }

function addUser() {
    obj.push({
        name: `${userName.value}`,
        age: `${userAge.value}`,
        created_at: getDate(),
        image: './images/card_avatar.png'
    })
    newObj.push = (obj)
    readObj()
}







