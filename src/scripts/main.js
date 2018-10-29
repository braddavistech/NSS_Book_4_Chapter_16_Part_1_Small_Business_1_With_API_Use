const API = require("./data");
const PRINTINFO = require("./insertToDom");


API.getUsers().then(users => users.forEach(user => PRINTINFO.toDom(user)));