function sayWelcome() {
    alert("Welcome")
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "" || message === "") {
    document.getElementById("message").innerHTML = "Please fill all fields!";
    return false;
  } else {
    document.getElementById("message").innerHTML = "Form submitted successfully!";
    return true;
  }
}

function subscribe(plan) {
  alert("You have successfully subscribed to the " + plan + " plan!");
}
``