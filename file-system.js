const fs = require("fs");

const isi = fs.readFileSync("./person.json", "utf-8");
console.log(isi);
