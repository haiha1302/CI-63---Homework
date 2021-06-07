import Commodity from './commodity.js'
import Clothes from './clothes.js'
import Fruit from './fruit.js'
import Houseware from './houseware.js'

const arrFruit = []

const newFruit1 = new Fruit('Xoài Cát', 20000, 'Hòa Lộc', '03/06/2021', 2)
const newFruit2 = new Fruit('Dưa Hấu', 30000, 'Hà Nội', '02/06/2021', 3)

const newClothes1 = new Clothes('Áo thun', 200000, 'VN')
const newClothes2 = new Clothes('Quần bò', 500000, 'VN')

const newHouseware1 = new Houseware('Smart TV', 1000000, 'Malaysia')
const newHouseware2 = new Houseware('Tủ lạnh', 8000000, 'Phillippines')

console.log(newFruit1.showData());

arrFruit.push(newFruit1)
arrFruit.push(newFruit2)
console.log(arrFruit);

function add() {
    const inputId = prompt('Nhập id: ');
    const inputName = prompt('Nhập tên: ');
    const inputPrice = Number(prompt('Nhập giá: '));
    const inputProducer = prompt('Nhập nhà sản xuất: ');
    const inputDiscount = prompt('Nhập giảm giá: ');
    const inputEntryDate = prompt('Nhập ngày nhập: ');
    const newFruit = new Fruit (inputId, inputName, inputPrice, inputProducer, inputDiscount, inputEntryDate)
    arrFruit.push(newFruit)
    console.log(arrFruit);
}

function buy() {
    const arrFruitBuy = []
    let inputNameBuy = prompt('Nhập tên hoa quả bạn muốn mua: ')
    for(i = 0; i <= arrFruit.length; i++) {
        if (inputNameBuy === arrFruit[i].name) {
            console.log(` Bạn muốn mua: ${arrFruit[i].name} `);
            arrFruitBuy.push(arrFruit[i])
        }
    }
}

