const { readFileSync, writeFileSync } = require("fs")

function getPost(filename) {
  return JSON.parse(readFileSync(filename));

}

function savePost(filename, data) {
    writeFileSync(filename, JSON.stringify(data));
}
module.exports= {getPost,savePost};