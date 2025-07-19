document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("amount")['value'] = getTotalCost();
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: getTotalCost().toString(),
        width: 200,
        height: 200
    });

    document.getElementById('payButton').addEventListener('click', function() {
        alert('payment successful'); 
        window.open("../feedback/index.html", "_self");
    });
});


function getTotalCost() {
    let totalAmount = 0;
    if (parseInt(sessionStorage.getItem("items")) >= 1) {
        for(let i=0; i < parseInt(sessionStorage.getItem("items")); i++) {
            if(sessionStorage.getItem(`item${i+1}`) != null) {
                let product = sessionStorage.getItem(`item${i+1}`);
                let start = product.indexOf(",") + 2;
                let cost = product.substring(start);
                let amount = "";
                
                for (let j = 0; j < cost.length; j++) {
                    amount += cost.charAt(j) == "," ? "" : cost.charAt(j);
                }
                
                totalAmount += parseInt(amount);
            }
        }

        return totalAmount;
    } else {
        return 0;
    }
}
