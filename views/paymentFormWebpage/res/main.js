function additems() {
    const cart = document.querySelector(".cart");
    for(let i=0; i <= parseInt(sessionStorage.getItem("items")); i++) {
        let p = document.createElement("p");
        p.innerHTML = sessionStorage.getItem(`item${i}`);
        cart.appendChild(p);
        console.log(p);
    }
}
