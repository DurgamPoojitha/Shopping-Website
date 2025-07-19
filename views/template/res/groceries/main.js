productsList = [
    ['Apples(1Kg)', '₹120'],
    ['Oragnes(1Kg)', '₹70'],
    ['Bananas(12pcs)', '₹80'],
    ['PineApples(1pcs)', '₹200'],
    ['Cooking Oil(1L)', '₹300'],
    ['Body Soap(Pink)', '₹65'],
    ['Green Dal(1Kg)', '₹250'],
    ['White Rice(25Kg)', '₹2,000'],
    ['Brown Rice(25Kg)','₹2,500' ],
    ['Eggs(12pcs)', '₹96'],
    ['Shampoo(Pack of 3)', '₹500'],
    ['Doritos', '₹20'],
    ['Noodles', '₹75'],
    ['Carrots(1Kg)', '₹70'],
    ['Mangoes(1kg)', '₹65'],
    ['Tomatoes(1Kg)', '₹50'],
    ['Botanical Detergent', '₹335'],
    ['Grain Salt', '₹30'],
    ['Tooth Brush & Paste', '₹25'],
    ['All in one kit', 'Out of Stock']
]

function LoadItems() {
    for(i=1; i<productsList.length+1; i++) {
        addProduct(i, productsList[i-1][0], productsList[i-1][1]);
    }
}


function addProduct(img_num, Pname, Pcost) {
    let cardBg = document.createElement('div');
    let img = document.createElement('img');
    let name_ = document.createElement('p');
    let cost = document.createElement('p');
    cardBg.className = 'product';
    img.src = `res/${img_num}.png`;
    name_.innerHTML = Pname;
    cost.innerHTML = Pcost;
    name_.className = 'name';
    cost.className = 'cost';
    cardBg.onclick = () => {
        const detailsOfProduct = `${productsList[img_num-1][0]},${productsList[img_num-1][1]}`;
        console.log(detailsOfProduct);
    };
    const bdy = document.querySelector('#body');
    bdy.appendChild(cardBg);
    cardBg.appendChild(img);
    cardBg.appendChild(name_);
    cardBg.appendChild(cost);
}