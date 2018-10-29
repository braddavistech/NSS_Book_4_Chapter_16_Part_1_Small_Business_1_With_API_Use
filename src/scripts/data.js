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