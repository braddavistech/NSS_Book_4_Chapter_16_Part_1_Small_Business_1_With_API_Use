(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const API = {
  getUsers () {
    return fetch("http://localhost:8088/users")
      .then(users => users.json())
  },
  getDept (deptId) {
    return fetch(`http://localhost:8088/departments?departmentId=${deptId}`)
      .then(users => users.json())
      .then(department => {
        return department[0].name;
      });
  },
  getEquip (equipId) {
    return fetch(`http://localhost:8088/equipment?equipmentId=${equipId}`)
      .then(users => users.json())
      .then(equipment => {
        return equipment[0].name;
      });
  }
};

module.exports = API;
},{}],2:[function(require,module,exports){
const API = require("./data");
let placeholder = document.querySelector(".employees");

const PRINTINFO = {
  toDom(user) {
    let temp = document.createElement("article");
    temp.setAttribute("class", "employee");
    temp.innerHTML = `
      <header class="employee__name">
          <h1>${user.name}</h1>
      </header>`
    API.getDept(user.departmentId)
      .then(dept => {
        temp.innerHTML += `
        <section class="employee__department">
          Department: ${dept}
        </section>`;
      })
    API.getEquip(user.equipmentId)
      .then(equip => {
        temp.innerHTML += `
      <section class="employee__equipment">
          Technology Issued: ${equip}
      </section>`
        placeholder.appendChild(temp);
      });
  }
};

module.exports = PRINTINFO;
},{"./data":1}],3:[function(require,module,exports){
const API = require("./data");
const PRINTINFO = require("./insertToDom");


API.getUsers().then(users => users.forEach(user => PRINTINFO.toDom(user)));
},{"./data":1,"./insertToDom":2}]},{},[3]);
