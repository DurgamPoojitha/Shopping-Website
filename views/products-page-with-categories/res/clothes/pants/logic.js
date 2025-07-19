
productsList = 
    [
        ["Denim Shorts", "₹24.99"],
        ["Cropped Trousers", "₹39.99"],
        ["Khaki Pants", "₹44.99"],
        ["Stretch Joggers", "₹29.99"],
        ["Flare Jeans", "₹54.99"],
        ["Wide-leg Trousers", "₹49.99"],
        ["Corduroy Pants", "₹34.99"],
        ["Cargo Shorts", "₹19.99"],
        ["Track Pants", "₹27.99"],
        ["Pleated Trousers", "₹59.99"],
        ["Skinny Chinos", "₹37.99"],
        ["Utility Pants", "₹42.99"],
        ["High-Waisted Jeans", "₹64.99"],
        ["Harem Pants", "₹31.99"],
        ["Ankle Pants", "₹47.99"],
        ["Wide-leg Trousers", "₹49.99"]
      ];

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
