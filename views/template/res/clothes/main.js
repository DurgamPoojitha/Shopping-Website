productsList = [
    ['T-Shirt', '₹350'],
    ['Jump Suit', '₹1000'],
    ['Dress(Green)', '₹1,500'],
    ['Black T-Shirt', '₹500'],
    ['Printed T-Shirt', '₹330'],
    ['Comfy Pants', '₹570'],
    ['Levi Jeans(4pcs)', '₹3,999'],
    ['Tuxedo', '₹2,039'],
    ['Formal Suit','₹6,999', ],
    ['Saree(Red)', '₹1,400'],
    ['Dhoti', '₹1,575'],
    ['Turban', '₹457'],
    ['Sweaters(2pcs)', '₹1,399'],
    ['Sweaters(4pcs)', '₹2,000'],
    ['Crop Top', '₹2,300'],
    ['Short Dress', '₹2,500'],
    ['Leather Jacket', '₹3,035'],
    ['Formal Shirt', '₹1,200'],
    ['Japanese Kimono', '₹5,699'],
    ['Amrita Uniform', 'Out of Stock']
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