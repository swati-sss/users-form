var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Sr.No"] = document.getElementById("Sr. no").value;
    formData["fullname"] = document.getElementById("fullname").value;
    formData["Username"] = document.getElementById("Username").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Address"] = document.getElementById("Address").value;
    formData["phone"] = document.getElementById("Phone").value;
    formData["website"] = document.getElementById("website").value;
    formData["ccompany"] = document.getElementById("company").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.Username;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.Address;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.phone;
    cell4 = newRow.insertCell(6);
    cell4.innerHTML = data.website;
    cell4 = newRow.insertCell(7);
    cell4.innerHTML = data.company;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Username").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("website").value = "";
    document.getElementById("company").value = "";
    selectedRow = null;
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}