
productsList = [
    ["Anarkali Suit", "₹5999.00"],
    ["Lehenga Choli", "₹6999.00"],
    ["Saree with Blouse", "₹4999.00"],
    ["Salwar Kameez", "₹4599.00"],
    ["Patiala Suit", "₹3799.00"],
    ["Banarasi Silk Saree", "₹5599.00"],
    ["Embroidered Lehenga", "₹7299.00"],
    ["Bandhani Saree", "₹4199.00"],
    ["Churidar Kurta Set", "₹3899.00"],
    ["Kanjeevaram Silk Saree", "₹6999.00"],
    ["Gota Patti Suit", "₹5499.00"],
    ["Cotton Silk Anarkali", "₹4999.00"],
    ["Phulkari Dupatta Set", "₹3299.00"],
    ["Kalamkari Lehenga", "₹6499.00"],
    ["Embroidered Sharara Suit", "₹5799.00"],
    ["Bengali Silk Saree", "₹4899.00"],
    ["Rajputi Poshak", "₹7799.00"],
    ["Kashmiri Embroidered Dress", "₹6299.00"],
    ["Kota Doria Saree", "₹3599.00"],
    ["Gujarati Garba Dress", "₹4399.00"]
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
