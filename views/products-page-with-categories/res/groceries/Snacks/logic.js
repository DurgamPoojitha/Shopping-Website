const productsList = [
    ["Lays", "₹25"],
    ["Mad Angles", "₹60"],
    ["Puffcorn", "₹50"],
    ["Kurkure", "₹25"],
    ["Little Hearts", "₹35"],
    ["Cheese Balls", "₹45"],
    ["Dark Fanatasy Yumfills Pie", "₹50"],
    ["Munch Bites", "₹100"],
    ["Doritos", "₹60"],
    ["Lotte Choco Pie", "₹20"],
    ["Britannia Gobbles Bar Cake Fruity Fun", "₹35"],
    ["Hide and Seek", "₹50"],
    ["Dark Fantasy", "₹60"],
    ["Maggi", "₹20"],
    ["Maggi-Pazzta", "₹40"],
    ["Yipee", "₹20"]
];

function addProduct(img_num, Pname, Pcost) {
    let cardBg = document.createElement('div');
    let img = document.createElement('img');
    let name_ = document.createElement('p');
    let cost = document.createElement('p');
    cardBg.className = 'product';
    img.src = `./res/${img_num}.png`;
    img.alt = Pname;
    name_.innerHTML = Pname;
    cost.innerHTML = Pcost;
    name_.className = 'name';
    cost.className = 'cost';
    const bdy = document.querySelector('.mainFrame');
    bdy.appendChild(cardBg);
    cardBg.appendChild(img);
    cardBg.appendChild(name_);
    cardBg.appendChild(cost);
    cardBg.onclick = function() { 
        if(Object.values(sessionStorage).indexOf([Pname, Pcost].toString()) == -1) {
            let itemsCount = parseInt(sessionStorage.getItem("items") || '0');
            sessionStorage.setItem("items", itemsCount + 1);
            sessionStorage.setItem(`item${itemsCount + 1}`, [Pname, Pcost]);
        }
    }
}

function loadItems() {
    if(sessionStorage.getItem("items") == null) {
        sessionStorage.setItem("items", 0);
    }
    for(let i = 0; i < productsList.length; i++) {
        addProduct(i + 1, productsList[i][0], productsList[i][1]);
    }
}
