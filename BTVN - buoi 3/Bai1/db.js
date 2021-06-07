import User from './user.js'
import getDate from './getDate.js'

const obj = []

obj.push(new User('Nguyen Hai Ha', 21, './images/card_avatar.png', getDate()))
obj.push(new User('Ha__lo', 25, './images/card_avatar.png', getDate()))

export default obj