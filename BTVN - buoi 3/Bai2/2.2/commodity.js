class Commodity {
    constructor(name, price, producer, discount, entrydate) {
        this._name = name;
        this._price = price;
        this._producer = producer;
        this._discount = discount;
        this._entrydate = entrydate;
    }

    set name(value) {
        this._name = value
    }
    get name() {
        return this._name
    }

    set price(value) {
        this._price = value
    }
    get price() {
        return this._price
    }

    set producer(value) {
        this._producer = value
    }
    get producer() {
        return this._producer
    }

    set discount(value) {
        this._discount = value
    }
    get discount() {
        return this._discount
    }

    set entrydate(value) {
        this._entrydate = value
    }
    get entrydate() {
        return this._entrydate
    }
}

export default Commodity