
productsList = [['IKEA TARVA', '₹2,800'], ['IKEA DETMOLT', '₹1,900'], ['IKEA NORDVIKEN', '₹2,900'], ['IKEA BROR', '₹6,600'], ['IKEA GRUSNARB', '₹8,900'], ['IKEA BRIMNES', '₹12,000'], ['IKEA NURDBY', '₹2,800'], ['IKEA HEMNES', '₹4,300'], ['IKEA LINNES', '₹1,700'], ['IKEA HULLESTAD', '₹5,800'], ['IKEA NYBORG', '₹7,900'], ['IKEA HOGBORG', '₹3,599'], ['IKEA SÖDERHAMN', '₹6,900'], ['IKEA LACK', '₹1,444'], ['IKEA TROTTEN', '₹1,797'], ['IKEA VITTERÖT', '₹642'], ['IKEA TROFAST', '₹1,199'], ['IKEA BRORAPPLARYD', '₹1,999'], ['IKEA EKEDALEN', '₹2,299'], ['IKEA MALM', '₹13,999']];

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
