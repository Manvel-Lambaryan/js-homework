class UserData {
  constructor(user) {
    this.user = user;
  }

  getUserData() {
    return this.user;
  }
}

class ProfileRenderer {
  constructor(userData) {
    this.userData = userData;
  }

  render() {
    const user = this.userData.getUserData();

    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${user.name}</h2>
      <p>${user.email}</p>
    `;
    document.body.appendChild(div);
  }
}
