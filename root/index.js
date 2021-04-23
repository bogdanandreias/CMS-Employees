let addBtn = document.querySelector('button');
let table = document.querySelector("table");

let firstNameInput = document.querySelector("#firstname");
let lastNameInput = document.querySelector("#lastname");
let emailInput = document.querySelector("#email");
let genderInput = document.querySelector("#gender");
let birthDateInput = document.querySelector("#birthdate");
let photoInput = document.querySelector("#photo");

addBtn.addEventListener('click', () => {
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let email = emailInput.value;
  let gender = genderInput.value;
  let birthDate = birthDateInput.value;
  let photo = photoInput.value;

  let tableContent = `
                    <tr>
                        <td>${photo}</td>
                        <td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${email}</td>
                        <td>${gender}</td>
                        <td>${birthDate}</td>
                        <td><input type="button" value="X" onclick="SomeDeleteRowFunction(this)"></td>
                    </tr>
                        `;

    table.innerHTML += tableContent;
});

function SomeDeleteRowFunction(o) {
    //no clue what to put here?
    var p=o.parentNode.parentNode;
        p.parentNode.removeChild(p);
   }
