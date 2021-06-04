
class Fruit {
    constructor(id, name, price, producer, sale, entrydate) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._producer = producer;
        this._sale = sale;
        this._entrydate = entrydate;
    }

    get id() {
        return this._id
    }
    set id(value) {
        this._id = value
    }

    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }

    get price() {
        return this._price
    }
    set price(value) {
        this._price = value
    }

    get producer() {
        return this._producer
    }
    set producer(value) {
        this._producer = value
    }

    get sale() {
        return this._sale
    }
    set sale(value) {
        this._sale = value
    }

    get entrydate() {
        return this._entrydate
    }
    set entrydate(value) {
        this._entrydate = value
    }

    showData() {
        return `
            <div class="card" id="card">
                <span  class='close'>&times</span>
                <div class="content">
                <img src="${this._image}" alt="Avatar" style="width: 100%;">
                    <div class="content">
                        <p><b>Id: </b>${this._id}</p>
                        <p><b>Name: </b>${this._name}</p> 
                        <p><b>Price: </b>${this._price}</p> 
                        <p><b>Producer: </b>${this._producer}</p>
                        <p><b>Sale: </b>${this._sale}</p> 
                        <p><b>Entry Date: </b>${this._entrydate}</p>
                    </div>
                </div>
            </div>
        `
    }
}

const arrFruit = []

const newFruit = new Fruit(1, 'Xoài Cát', '20.000', 'Hòa Lộc', '2%', '03/06/2021')

console.log(newFruit);
arrFruit.push(newFruit)
console.log(newFruit.showData());
container.innerHTML = newFruit.showData()