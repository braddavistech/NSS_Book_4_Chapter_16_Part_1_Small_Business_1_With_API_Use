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