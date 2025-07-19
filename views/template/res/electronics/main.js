let selected = [];

productsList = [
    ['MacBookAir M2', '$3,000'],
    ['Iphone15 Pro', '$1,999'],
    ['IPhone 15', '$1,499'],
    ['Apple KeyBoard', '$800'],
    ['Lenovo ThinkPad', '₹85,000'],
    ['Google Pixel7', '₹44,999'],
    ['JBL HeadPhones', '₹6,999'],
    ['Canon EOS 3000d', '₹13,500'],
    ['Canon Powershot V1','₹10,000' ],
    ['HP NoteBook SE1', '₹48,000'],
    ['MacBookAir M1 Pro', '₹79,900'],
    ['Bluetooth Keyboard', '₹4,790'],
    ['FireBolt S1 Watch', '₹1,399'],
    ['Boat HeadPhones', '₹3,499'],
    ['Boat Earbuds 450', '₹5,000'],
    ['Vintage Speaker', '₹6,999'],
    ['Arduino Uno', '₹335'],
    ['Vintage Dial Phone', '₹8,999'],
    ['Ryzen Gen5 CPU', '₹14,999'],
    ['Droid', 'Out of Stock']
]

function LoadItems() {
    localStorage.setItem("electronics", "0");
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
        if(!selected.includes(detailsOfProduct)) {
            selected.push(detailsOfProduct);
            sessionStorage.setItem(productsList[img_num-1][0], productsList[img_num-1][1]);
            console.log(sessionStorage);
        }
    };
    const bdy = document.querySelector('#body');
    bdy.appendChild(cardBg);
    cardBg.appendChild(img);
    cardBg.appendChild(name_);
    cardBg.appendChild(cost);
}