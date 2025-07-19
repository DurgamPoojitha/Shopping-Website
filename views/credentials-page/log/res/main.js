function increaseSize(elementId) {
    const el = document.getElementById(elementId.parentNode['id']);
    el.style.fontSize = '1.5rem';
    console.log(elementId.parentNode);
}

function decreaseSize(elementId) {
    const el = document.getElementById(elementId.parentNode['id']);
    el.style.fontSize = '1rem';
}

function login() {
    const mail = document.getElementById("mailI").value;
    const pswd = document.getElementById("pswdI").value;
    let atpost = mail.indexOf("@");
    let dotpos = mail.indexOf(".");
    
    if((pswd.trim() == "") || (mail.trim() == "")) {
        alert("Fields are empty!!");
    } else if (atpost < 2 || ((dotpos - atpost) < 2)) {
        alert("Email is not a valid one!");
    } else {
        window.backend.readData().then((result) => {
            if(result == (mail+pswd)) {
                window.open("../../products-page-with-categories/index.html", "_self");
            } else {
                alert("Log in Failed! Try signing in again!");
            }
        });
    }
}
