const title = document.getElementById("title");
const button = document.getElementById("changetext");
const input = document.getElementById("name");
button.addEventListener("click", () => {
  title.textContent = `Hello: ${input.value.toString()}`;
  title.style.color = "red";
});

