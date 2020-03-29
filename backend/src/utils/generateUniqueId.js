const crypto = require('crypto')
// const getId = () => crypto.randomBytes(4).toString('HEX')
// module.exports = getId
module.exports = () => crypto.randomBytes(4).toString('HEX')
