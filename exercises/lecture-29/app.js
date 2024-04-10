class AuthException extends Error {
    constructor(code, message) {
        super(message ? `${code}: ${message}` : code);
    }

    toString() {
        return this.message;
    }
}

let isAuth = (auth) => auth ?? false;
// let isAuth = (auth) => auth ?? true;
let dialogBoxId = document.getElementById("dialogBox");

const checkAuth = document.querySelector(".check-auth");
const errorMessage = document.createElement("p");

checkAuth.addEventListener("click", () => {
    try {
        if (!isAuth()) {
            throw new AuthException(
                "FORBIDDEN",
                "You don't have access to this page"
            );
        } else {
            window.open("success.html", "_blank");
        }
    } catch (e) {
        errorMessage.classList.add("message");
        errorMessage.textContent = e.toString();
        // dialogBoxId.appendChild(errorMessage);
        dialogBoxId.children[1].appendChild(errorMessage);
        showDialog();
    }
});

function showDialog(e) {
    dialogBoxId.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            closeDialog();
        }
    });

    dialogBoxId.showModal();
}

function closeDialog() {
    dialogBoxId.children[1].removeChild(errorMessage);
    dialogBoxId.close();
}
