const { readFileSync, writeFileSync } = require('fs')

function getPro(filename) {
  return JSON.parse(readFileSync(filename));

}

function savePro(filename, data) {
    writeFileSync(filename, JSON.stringify(data));
}
module.exports= {getPro,savePro};