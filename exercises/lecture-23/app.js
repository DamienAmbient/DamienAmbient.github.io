const alert = document.querySelector(".alert");

function setClass(element, text, classname) {
    element.classList.add(classname);
    element.textContent = `A simple ${text} alert—check it out!`;
}

//1
const buttonPrimary = document.querySelector(".btn-primary");
buttonPrimary.onclick = function () {
    setClass(buttonPrimary, "primary", "alert-primary");
};

//2
const btnSecondary = document.querySelector(".btn-secondary");
btnSecondary.addEventListener("click", function () {
    setClass(btnSecondary, "secondary", "alert-primary");
});

//3
const btnSuccess = document.querySelector(".btn-success");
btnSuccess.addEventListener("mouseover", function () {
    setClass(btnSuccess, "success", "alert-success");
});

btnSuccess.addEventListener("mouseout", function () {
    btnSuccess.classList.remove("alert-success");
    btnSuccess.textContent = "";
});

//4
const btnDanger = document.querySelector(".btn-danger");
btnDanger.addEventListener("focus", function () {
    btnDanger.classList.add("alert-danger");
    btnDanger.textContent = "A simple danger alert—check it out!";
});
btnDanger.addEventListener("focusout", function () {
    btnDanger.classList.remove("alert-danger");
    btnDanger.textContent = "";
});

//5
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        btnLight.style.display = "block";
        btnDark.style.display = "none";
    } else {
        btnDark.style.display = "block";
        btnLight.style.display = "none";
    }
}
btnDark.addEventListener("click", toggleMode);
btnLight.addEventListener("click", toggleMode);

//6
const btnInfo = document.querySelector(".btn-info");
btnInfo.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnInfo.classList.add("alert-info");
        btnInfo.textContent = "A simple info alert—check it out!";
    }
});

//7
const cardElements = document.querySelectorAll(".card");

for (let i = 0; i < cardElements.length; i++) {
    const cardTitle = cardElements[i].querySelector(".card-title");
    console.log(cardTitle.textContent);
}

//8
const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
    const cardTitle = cards[i].querySelector(".card-title");
    const addToCartBtn = cards[i].querySelector(".add-to-cart");

    addToCartBtn.addEventListener("click", function () {
        console.log(cardTitle.textContent);
    });
}
