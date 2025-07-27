class AdminOnly {
  static [Symbol.hasInstance](obj) {
    if (obj && obj.role === 'admin') {
      return true;
    }
    return false;
  }
}


const adminUser = {
  name: 'Alice',
  role: 'admin',
}

const regularUser = {
  name: 'Bob',
  role: 'user',
};

const noRoleUser = {
  name: 'Charlie',
};

console.log(noRoleUser, '-->' ,noRoleUser instanceof AdminOnly);
console.log(adminUser, '-->' ,adminUser instanceof AdminOnly);
console.log(regularUser, '-->' ,regularUser instanceof AdminOnly);
