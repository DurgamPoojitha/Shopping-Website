function increaseSize(elementId) {
    const el = document.getElementById(elementId.parentNode['id']);
    el.style.fontSize = '1.5rem';
}

function decreaseSize(elementId) {
    const el = document.getElementById(elementId.parentNode['id']);
    el.style.fontSize = '1rem';
}

function signup() {
    const mail = document.getElementById("mailI").value;
    const pswd = document.getElementById("pswdI").value;
    const cpswd = document.getElementById("cpswdI").value;
    let atpost = mail.indexOf("@");
    let dotpos = mail.indexOf(".");
    
    if((pswd.trim() == "") || !(pswd == cpswd) || (mail.trim == "")) {
        alert("Passwords Do Not match!\nAre the fields empty?");
    } else if (atpost < 2 || ((dotpos - atpost) < 2)) {
        alert("Email is not a valid one!");
    } else {
        window.backend.saveData(mail+pswd).then((response) => {
            if (!response) {
                alert("An error occurred, could not create an account!");
            } else {
                alert(`Account for ${mail} created successfully!!`);
            }
        })
    }
}