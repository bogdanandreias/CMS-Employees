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
  let birthDate = formatDate(birthDateInput.value);
  let photo = document.getElementById("photo");

  if (
    firstName == "" ||
    lastName == "" ||
    birthDate == "" ||
    gender == "" ||
    email == "" ||
    photo.value == ""
  ) {
    alert("Fill in all fields!");
    return 0;
  }

  if (checkImage(photo.value) == false) {
    alert("Image format not accepted.");
    return 0;
  }
  readURL(photo);
  document.getElementById("photo").value = null;
  let tableContent = `
                    <tr>
                        <td><img id="profilePic" src="#"></td>
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

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profilePic').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
function formatDate(userDate) {
    var d = new Date(userDate);
    const monthNames = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
    return d.getDay() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
}

function checkImage(picture) {
    if(picture.indexOf('.jpg') >= 0 || picture.indexOf('.jpeg') >= 0 || picture.indexOf('.png') >= 0) return true;
    return false;
}

function DeleteRow(o) {
  //no clue what to put here?
  var p = o.parentNode.parentNode;
  p.parentNode.removeChild(p);
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) =>{
  console.log(e.target.value)
})
