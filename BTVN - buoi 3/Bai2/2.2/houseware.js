import Commodity from './commodity.js'

class Houseware extends Commodity {
    constructor(name, price, producer, discount, entrydate, reliability) {
        super(name, price, producer, discount, entrydate,)
        this._reliability = reliability
    }

    set reliability(value) {
        this._reliability = value
    }
    get reliability() {
        return this._reliability
    }
}

export default Houseware