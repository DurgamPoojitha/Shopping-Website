function changePage(el) {
    const clicked = document.getElementById(el['id']);
    if(clicked['id'] === "shop") {
        window.open("../../credentials-page/sign/index.html");
    }
}
