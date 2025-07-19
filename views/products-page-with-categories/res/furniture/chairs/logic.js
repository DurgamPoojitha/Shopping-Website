
productsList = [['Chair', '₹2,499'], ['Executive Chair', '₹5,499'], ['Reclining Chair', '₹7,999'], ['Ergonomic Chair', '₹8,999'], ['Gaming Chair', '₹14,999'], ['Rocker Chair', '₹26,999'], ['Swivel Chair', '₹7,999'], ['Leather Chair', '₹11,999'], ['Executive Leather Chair', '₹24,999'], ['Office Chair', '₹9,999'], ['Executive Office Chair', '₹14,999'], ['Executive Office Chair', '₹22,999'], ['Gaming Office Chair', '₹19,999'], ['Gaming Leather Office Chair', '₹26,999'], ['Swivel Office Chair', '₹10,999'], ['Leather Swivel Office Chair', '₹23,999'], ['Ergonomic Office Chair', '₹14,999'], ['Ergonomic Office Chair', '₹25,999'], ['Gaming Ergonomic Chair', '₹18,999'], ['Ergonomic Office Chair', '₹27,999']];

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
