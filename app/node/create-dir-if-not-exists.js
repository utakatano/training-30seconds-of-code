// https://www.30secondsofcode.org/js/s/create-dir-if-not-exists

const fs = require('fs')

const createDirIfNotExists = dir =>
  !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined

createDirIfNotExists('test')