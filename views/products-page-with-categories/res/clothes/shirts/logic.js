
productsList = [
    ["Vintage Sunset Tee","₹1,000"],
  ["Abstract Splatter Shirt","₹500"],
  ["Geometric Pattern Blouse","₹300"],
 ["Nature Scene Print T-Shirt","₹750"],
  ["Urban Graffiti Hoodie","₹920"],
  ["Classic Striped Polo","₹4000"],
  ["Funky Tie-Dye Tank Top","₹499"],
  ["Minimalist Graphic Tee","₹2,500"],
  ["Floral Print Button-up","₹620"],
  ["Sporty Logo Hoodie","₹250"],
  ["Vintage Sunset Tee","₹1,000"],
  ["Abstract Splatter Shirt","₹500"],
  ["Geometric Pattern Blouse","₹300"],
 ["Nature Scene Print T-Shirt","₹750"],
  ["Urban Graffiti Hoodie","₹920"],
  ["Classic Striped Polo","₹4000"],
  ["Funky Tie-Dye Tank Top","₹499"],
  ["Minimalist Graphic Tee","₹2,500"],
  ["Floral Print Button-up","₹620"],
  ["Sporty Logo Hoodie","₹250"],
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
