
productsList = [['MacBook Pro', '₹99,999'], ['Dell XPS 15', '₹79,999'], ['HP Spectre 360X', '₹89,999'], ['Microsoft Surface Book 3', '₹84,999'], ['ASUS ROG Strix', '₹59,999'], ['Acer Predator', '₹39,999'], ['Lenovo ThinkPad X1 Carbon', '₹79,999'], ['MSI Prestige 15', '₹59,999'], ['ASUS ZenBook 3', '₹69,999'], ['HP EliteBook x360', '₹74,999'], ['Dell XPS 13', '₹64,999'], ['Acer Swift 3', '₹44,999'], ['Apple MacBook Air', '₹94,999'], ['ASUS TUF Gaming', '₹79,999'], ['Acer Nitro 5', '₹69,999'], ['Lenovo ThinkPad T490', '₹44,999'], ['MSI Prestige PS63', '₹49,999'], ['HP EliteBook 840 G5', '₹39,999'], ['Lenovo Legion 5', '₹69,999'], ['ASUS ZenBook S13', '₹54,999']];

function addProduct(img_num, Pname, Pcost) {
    let cardBg = document.createElement('div');
    let img = document.createElement('img');
    let name_ = document.createElement('p');
    let cost = document.createElement('p');
    cardBg.className = 'product';
    img.src = `./res/${img_num}.png`;
    name_.innerHTML = Pname;
    cost.innerHTML = Pcost;
    name_.className = 'name';
    cost.className = 'cost';
    const bdy = document.querySelector('.mainFrame');
    bdy.appendChild(cardBg);
    cardBg.appendChild(img);
    cardBg.appendChild(name_);
    cardBg.appendChild(cost);
    cardBg['onclick'] = function() { 
        if(Object.values(sessionStorage).indexOf([Pname, Pcost].toString()) == -1) {
            sessionStorage.setItem("items", parseInt(sessionStorage.getItem("items"))+1);
            sessionStorage.setItem(`item${sessionStorage.getItem("items")}`, [Pname, Pcost]);
        }
    }
}


function loadItems() {
    for(i=0; i < productsList.length; i++) {
        addProduct(i+1, productsList[i][0], productsList[i][1]);
    }

    if(sessionStorage.getItem("items") == null) {
        sessionStorage.setItem("items", 0);
    }
}
