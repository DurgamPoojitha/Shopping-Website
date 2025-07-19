
productsList = [
    ['Apple Desk', '₹54,999'],
    ['Microsoft Edge', '₹49,999'],
    ['Sony Precision', '₹59,999'],
    ['HP EliteDesk', '₹39,999'],
    ['Dell Precision', '₹44,999'],
    ['Acer Predator', '₹29,999'],
    ['Lenovo Legion', '₹49,997'],
    ['ASUS ROG', '₹79,999'],
    ['Alienware','₹69,999' ],
    ['MSI Meg', '₹59,999'],
    ['HP Omen', '₹49,999'],
    ['Dell G Series', '₹39,999'],
    ['ASUS TUF', '₹69,999'],
    ['Acer Nitro', '₹29,999'],
    ['Lenovo Y Series', '₹49,999'],
    ['ASUS TUF Gaming', '₹79,999'],
    ['Alienware Area-51', '₹89,999'],
    ['MSI Prestige', '₹59,999'],
    ['The HP EliteBook', '₹49,998'],
    ['The Dell Inspiron', '₹34,999']
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
