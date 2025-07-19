
productsList = 
    [
        ["Sequin Mini Dress", "₹3499.00"],
        ["Off-Shoulder Maxi Dress", "₹3999.00"],
        ["Lace Bodycon Dress", "₹2999.00"],
        ["Velvet Wrap Dress", "₹2599.00"],
        ["Satin Slip Dress", "₹2299.00"],
        ["Beaded Cocktail Dress", "₹4499.00"],
        ["Embroidered Tulle Gown", "₹5999.00"],
        ["Ruffled Party Dress", "₹3299.00"],
        ["Metallic Pleated Dress", "₹3799.00"],
        ["Feather Trimmed Dress", "₹4199.00"],
        ["Sequin Jumpsuit", "₹3699.00"],
        ["One-Shoulder Midi Dress", "₹3199.00"],
        ["Floral Embroidered Dress", "₹2899"],
        ["Sequin Jumpsuit", "₹3699.00"],
        ["One-Shoulder Midi Dress", "₹3199.00"],
        ["Floral Embroidered Dress", "₹2899"],
        ["Sequin Mini Dress", "₹3499.00"],
        ["Off-Shoulder Maxi Dress", "₹3999.00"],
        ["Lace Bodycon Dress", "₹2999.00"],
        ["Velvet Wrap Dress", "₹2599.00"]
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
