function showMessage() {
  const name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    document.getElementById("output").innerText =
      "Please enter your name.";
  } else {
    document.getElementById("output").innerText =
      "Hello, " + name + "!";
  }
}
