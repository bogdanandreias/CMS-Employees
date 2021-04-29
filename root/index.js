var employeesList = [];

jQuery(document).ready(function ($) {
  $.ajax({
    method: "GET",
    url: "https://localhost:5001/employee/Employee",
    success: function (data) {
      employeesList = data;
      console.log(employeesList);
      loadEmployees(employeesList);
    },
    error: function (data) {
      alert(`Failed to load employees list.`);
    },
  });
});

function loadEmployees(employeesList) {
  for (index = 0; index < employeesList.length; index++) {
    appendRow(employeesList[index]);
  }
}

function readURL(input, id) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#image" + id).attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function deleteUser(btn, idFromDb) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);

  console.log(idFromDb);

  $.ajax({
    method: "DELETE",
    url: `https://localhost:5001/employee/Employee/${idFromDb}`,
    success: function (data) {},
    error: function (data) {
      alert(`Failed to load employees list.`);
    },
  });
}

function formatDate(userDate) {
  var d = new Date(userDate);

  const monthNames = [
    "Ianuarie",
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Iulie",
    "August",
    "Septembrie",
    "Octombrie",
    "Noiembrie",
    "Decembrie",
  ];

  return d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
}

function validateInput(newEmployee) {
  if (
    !newEmployee.firstName ||
    !newEmployee.lastName ||
    !newEmployee.email ||
    !newEmployee.birthdate
  ) {
    return false;
  }
  return true;
}

function appendRow(employee) {
  let employeesTable = document.getElementById("myTable");
  var id = employeesTable.getElementsByTagName("tr").length;
  console.log(employee);

  employeesTable.innerHTML +=
    "</td><td><img id='image" +
    id +
    "' style='width: 20px; height: 20px' src='#'></img>" +
    "</td><td>" +
    employee.firstName +
    "</td><td>" +
    employee.lastName +
    "</td><td>" +
    employee.email +
    "</td><td>" +
    employee.gender +
    "</td><td>" +
    employee.birthdate +
    "</td><td><button onClick='deleteUser(this, " +
    employee.id +
    ")'>X</button></td></tr>";

  //readURL(employee.file, id);
}

function addEmployee() {
  // Number of inputs to create
  var newEmployee = new Object();
  newEmployee.lastName = document.getElementById("lastname").value;
  newEmployee.firstName = document.getElementById("firstname").value;
  newEmployee.email = document.getElementById("email").value;
  newEmployee.gender = document.getElementById("gender").value;
  //newEmployee.file = document.getElementById("myfile");
  newEmployee.birthdate = document.getElementById("birthdate").value;

  if (!validateInput(newEmployee)) {
    alert("Fields are required.");
  }

  $.ajax({
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(newEmployee),
    url: "https://localhost:5001/employee/Employee",
    success: function (data) {
      appendRow(data);
      employeesList.push(data);
    },
    error: function (data) {
      alert(`Failed to load employees list.`);
    },
  });
}

function filterEmployees() {
  filter = $("#filterSex").val();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  input = document.getElementById("searchBar");
  filterInput = input.value.toUpperCase();

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    td0 = tr[i].getElementsByTagName("td")[1];
    if (td && td0) {
      txtValue = td.textContent || td.innerText;
      txtValue0 = td0.textContent || td0.innerText;
      if (
        txtValue.indexOf(filter) > -1 &&
        txtValue0.toUpperCase().indexOf(filterInput) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sortTableByDate() {
  var sortAttribute = document
    .getElementById("sortDateButton")
    .getAttribute("sort");
  if (sortAttribute == "up")
    document.getElementById("sortDateButton").setAttribute("sort", "down");
  else document.getElementById("sortDateButton").setAttribute("sort", "up");
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = new Date(rows[i].getElementsByTagName("td")[5].innerText);
      y = new Date(rows[i + 1].getElementsByTagName("td")[5].innerText);
      if (sortAttribute == "up") {
        if (x < y) {
          shouldSwitch = true;
          break;
        }
      } else if (sortAttribute == "down") {
        if (x > y) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
