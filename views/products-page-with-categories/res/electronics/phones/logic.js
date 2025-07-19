
productsList = [['Apple iPhone', '₹79,999'], ['Samsung Galaxy S22 Ultra', '₹79,999'], ['Google Pixel 7 Pro', '₹74,999'], ['OnePlus 10 Pro', '₹66,999'], ['OPPO Find X5 Pro', '₹79,999'], ['Xiaomi 12S Ultra', '₹79,999'], ['Motorola Edge 30 Ultra', '₹67,999'], ['Sony Xperia 1 IV', '₹1,09,999'], ['ASUS ZenFone 9', '₹67,999'], ['Nothing Phone (1)', '₹34,999'], ['Vivo X80 Pro', '₹84,999'], ['Samsung Galaxy A52 5G', '₹27,999'], ['Apple iPhone SE', '₹44,999'], ['Samsung Galaxy Z Fold 4', '₹1,54,999'], ['Apple iPhone 13 mini', '₹59,999'], ['Apple iPhone 13 Pro', '₹1,12,999'], ['Samsung Galaxy S22+', '₹72,999'], ['Google Pixel 6a', '₹29,999'], ['Samsung Galaxy M42 5G', '₹15,499'], ['Apple iPhone 12', '₹55,999']];

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
