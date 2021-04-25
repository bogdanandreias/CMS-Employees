let addBtn = document.querySelector("button");
let table = document.querySelector("table");

let firstNameInput = document.querySelector("#firstname");
let lastNameInput = document.querySelector("#lastname");
let emailInput = document.querySelector("#email");
let genderInput = document.querySelector("#gender");
let birthDateInput = document.querySelector("#birthdate");
let photoInput = document.querySelector("#photo");

addBtn.addEventListener("click", () => {
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let email = emailInput.value;
  let gender = genderInput.value;
  let birthDate = birthDateInput.value;
  let photo = photoInput.value;

  if(firstName == '' || lastName == '' || birthDate == '' || gender == '' || email == '' || photo.value == '') {
    alert("Fill in all fields!");
    return 0;
}

  let tableContent = `
                    <tr>
                        <td>${photo}</td>
                        <td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${email}</td>
                        <td>${gender}</td>
                        <td>${birthDate}</td>
                        <td><input type="button" value="X" onclick="DeleteRow(this)"></td>
                    </tr>
                        `;
 
    table.innerHTML += tableContent;
  
});

function DeleteRow(o) {
  //no clue what to put here?
  var p = o.parentNode.parentNode;
  p.parentNode.removeChild(p);
}
