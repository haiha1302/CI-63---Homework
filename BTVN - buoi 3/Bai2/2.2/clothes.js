import Commodity from './commodity.js'

class Clothes extends Commodity {
    constructor(name, price, producer, discount, entrydate, material) {
        super(name, price, producer, discount, entrydate)
        this._material = material;
    }

    set material(value) {
        this._material = value
    }
    get material() {
        return this._material
    }
}

export default Clothes