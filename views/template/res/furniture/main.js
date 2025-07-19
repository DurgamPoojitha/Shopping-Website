productsList = [
    ['Casual Chair Comfy', '₹1,000'],
    ['Wooden Stool', '₹1,999'],
    ['Sofa Large(Blue)', '₹3,400'],
    ['Aesthetic BookShelf', '₹5,000'],
    ['Ceramic Vase', '₹5,500'],
    ['Aesthetic Vase', '₹3,000'],
    ['Aesthetic Table Lamp', '₹2,699'],
    ['Jaguar BathTub', '₹13,500'],
    ['Comfy Chair','₹875' ],
    ['Wall Painting', '₹2,500'],
    ['Stylized Wooden Table', '₹7,678'],
    ['Bed', '₹10,000'],
    ['Modern Chair', '₹500'],
    ['Aesthetic Shelf', '₹3,499'],
    ['Decorative Deer', '₹7,000'],
    ['Decorative Dog', '₹3,500'],
    ['Pink Comfy Chair', '₹335'],
    ['Wall Painting', '₹4,999'],
    ['Wall Painting', '₹6,999'],
    ['Golden Procupine', 'Out of Stock']
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
