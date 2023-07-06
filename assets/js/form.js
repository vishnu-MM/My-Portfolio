
function validateForm() {
  var name = document.getElementById("name").value;
  var mobilenumber = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var sent = true;

  if (name == "") {
    document.getElementById("msg_name").innerHTML = "Name must be filled out";
    setTimeout(function () {
      document.getElementById("msg_name").innerHTML = "";
    }, 5000);
    sent = false;
  }

  if (/\d/.test(name)) {
    document.getElementById("msg_name").innerHTML = "Name should only contain characters";
    setTimeout(function () {
      document.getElementById("msg_name").innerHTML = "";
    }, 5000);
    sent = false;
  }

  if (mobilenumber == "") {
    document.getElementById("msg_number").innerHTML = "Mobile Number must be filled out";
    setTimeout(function () {
      document.getElementById("msg_number").innerHTML = "";
    }, 5000);
    sent = false;
  }

  if (isNaN(mobilenumber)) {
    document.getElementById("msg_number").innerHTML = "Mobile Number must be digits";
    setTimeout(function () {
      document.getElementById("msg_number").innerHTML = "";
    }, 5000);
    sent = false;
  }

  if (mobilenumber.length < 10) {
    document.getElementById("msg_number").innerHTML = "Mobile Number must have 10 digits";
    setTimeout(function () {
      document.getElementById("msg_number").innerHTML = "";
    }, 5000);
    sent = false;
  }

  if (mobilenumber.length > 10) {
    document.getElementById("msg_number").innerHTML = "Mobile Number must have only 10 digits";
    setTimeout(function () {
      document.getElementById("msg_number").innerHTML = "";
    }, 5000);
    sent = false;
  }

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("msg_mail").innerHTML = "Email must be a valid email address";
    setTimeout(function () {
      document.getElementById("msg_mail").innerHTML = "";
    }, 5000);
    sent = false;
  }

  if (subject == "") {
    document.getElementById("msg_subject").innerHTML = "Subject must be filled out";
    setTimeout(function () {
      document.getElementById("msg_subject").innerHTML = "";
    }, 5000);
    sent = false;
  }

  if (message == "") {
    document.getElementById("msg_message").innerHTML = "Message must be filled out";
    setTimeout(function () {
      document.getElementById("msg_message").innerHTML = "";
    }, 5000);
    sent = false;
  }

  return sent;
}

const form = document.getElementById("submit-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateForm()) {
    fetch(form.action, { method: "POST", body: new FormData(form) })
      .then(response => {
        alert("Sent Successfully");
        setTimeout(function () {
          form.reset();
        }, 5000);
      })
      .catch(error => console.error("Error!", error.message));
  }
});   