let bd = document.querySelector("body");
let buttons = document.querySelectorAll(".color");

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        bd.style.backgroundColor = e.target.id;
    });
});
