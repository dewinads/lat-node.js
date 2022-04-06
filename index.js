const os = require("os");

const fs = require("fs");

function createPerson(data) {
    fs.writeFileSync('./person.json', JSON.stringify(data));
}

createPerson({
    userInfo: os.userInfo(),
    release: os.release(),
    Verson: os.version(),
});