class User {
  constructor(name, email, photo){
    this.name = name;
    this.email = email;
    this.photo = photo;
  }

  show() {
    return `
<div class="card">
<img src="${this.photo}" alt="${this.name}">
<h3>${this.name}</h3> 
<p>${this.email}</p> 
</div> 
`;
  } 
}

const renderUsers = (users) => {
  const container = document.getElementById("usuarios");
  container.innerHTML = users.map(u => u.show).join("");
};

const getUsers = async (amount = 5) => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${amount}`);
    const data = await response.json();

    let userList = [];

    data.results.forEach((u) => {
      userList.push(new User(u.name.first, u.email, u.picture.medium))
    });

    renderUsers(userList);
  } catch (error) {
    console.error("Ocurrió un error al obtener los usuarios", error);
  }
}

const btn = document.getElementById("btnCargar");
btn.addEventListener("click", () => getUsers(3));
