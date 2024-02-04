const fileInput = document.querySelector('#file-input');
const tableBody = document.querySelector('tbody');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const content = e.target.result;
    const lines = content.split('\n');
    lines.map(line => {
      line = line.split(',')
      const person = new Person(line);
      person.appendRowToUI();
    })
  }
  reader.readAsText(file);
});

class Person {
  constructor(params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.email = params[2];
    this.phone = params[3];
  }
  appendRowToUI() {
    const row = document.createElement('tr');
    const firstNameTd = document.createElement('td');
    const lastNameTd = document.createElement('td');
    const emailTd = document.createElement('td');
    const phoneTd = document.createElement('td');
    firstNameTd.innerText = this.firstName;
    lastNameTd.innerText = this.lastName;
    emailTd.innerText = this.email;
    phoneTd.innerText = this.phone;
    row.append(firstNameTd, lastNameTd, emailTd, phoneTd);
    tableBody.appendChild(row);
  }
}