// adress form btn
let list = document.querySelector('.grid-container');

const adressbtn = document.querySelector("#adress-form")
const adressclose = document.querySelector("#adress-close")

adressbtn.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display = "flex"
})

adressclose.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display = "none"
})

// Hiển thị số trang
document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.getElementById('details');
    var pageIndicator = document.getElementById('pageIndicator');

    // Lắng nghe sự kiện khi carousel chuyển slide
    carousel.addEventListener('slid.bs.carousel', function(event) {
        var index = event.to + 1;
        var total = event.target.querySelectorAll('.carousel-item').length;
        pageIndicator.innerText = '(' + index + '/' + total + ')';
    });
});

// Danh sach products
let products = [
    {
        id: 1,
        name: 'Xiaomi Redmi Band 2 dây TPU',
        image: 'dongho1.jpg',
        price_old: 990000,
        price: 540000,    
        star: 4,
        danh_gia: 276
    },
    {
        id: 2,
        name: 'BeFit B4 44mm dây silicone',
        image: 'dongho2.jpeg',
        price_old: 990000,
        price: 440000,    
        star: 4,
        danh_gia: 200
    },
    {
        id: 3,
        name: 'Realme Band 2 dây TPU',
        image: 'dongho3.jpg',
        price_old: 990000,
        price: 490000,    
        star: 3,
        danh_gia: 27
    },
    {
        id: 4,
        name: 'HAYLOU GS 44.4mm dây silicone',
        image: 'dongho4.jpeg',
        price_old: 1390000,
        price: 550000,    
        star: 5,
        danh_gia: 98
    },
    {
        id: 5,
        name: 'BeFit B3 44mm dây silicone',
        image: 'dongho5.jpg',
        price_old: 1290000,
        price: 590000,    
        star: 4,
        danh_gia: 178
    },
    {
        id: 6,
        name: 'BeFit WatchFit 46.7mm dây silicone',
        image: 'dongho6.jpg',
        price_old: 800000,
        price: 590000,    
        star: 4,
        danh_gia: 75
    },
    {
        id: 7,
        name: 'Zwatch Z6 44mm dây silicone',
        image: 'dongho7.jpg',
        price_old: 690000,
        price: 590000,    
        star: 4,
        danh_gia: 20
    },
    {
        id: 8,
        name: 'Xiaomi Mi Band 8 Active dây TPU',
        image: 'dongho8.jpg',
        price_old: 690000,
        price: 590000,    
        star: 2,
        danh_gia: 19
    },
];
// Hiển thị products
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        newDiv.innerHTML = `
            <a href="product_details.html">
                <div class="product">
                    <img src="images/products/${value.image}" alt="">
                    <div class="product-text">
                        <li>${value.name}</li>
                        <li><img src="images/products/item1.png" alt="">Online giá rẻ quá</li>
                        <li>
                            <p>${value.price_old.toLocaleString()}<sup>đ</sup></p> - ${parseInt(((value.price_old-value.price)/value.price_old)*100)}%
                        </li>
                        <li>${value.price.toLocaleString()}<sup>đ</sup></li>
                        <li id="stars-container-${key}">
                        </li>
                    </div>
                </div>
            </a>
            <div class = "product-btn">
                <button><i class="fa-solid fa-circle-plus" style="color: #0400ff;"></i> so sánh</button>
                <button onclick="addToCard(${key})">Add To Card</button>
            </div>
                        `;
        list.appendChild(newDiv);
        let starsContainer = document.getElementById(`stars-container-${key}`);
        let starElement = '<i class="fa-solid fa-star" style="color: #fff700;"></i> ';
        let unstarElement = '<i class="fa-solid fa-star" style="color: #a6a6a6;"></i> ';
        let starCount = value.star;
        let danh_gia = value.danh_gia;

        for (let i = 0; i < starCount; i++) {
            starsContainer.innerHTML += starElement;
        }
        for (let i = 0; i < 5-starCount; i++) {
            starsContainer.innerHTML += unstarElement;
        }
        starsContainer.innerHTML += danh_gia;
    })
}
initApp();

// Giỏ hàng
let quantity = document.querySelector('.quantity');
let total = document.querySelector('.total');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');


window.addEventListener('scroll', function() {
    var element = document.querySelector('.shopping');

    if (window.scrollY > 100) { // Chuyển sang kiểu fixed sau khi cuộn xuống 300px
        element.style.position = 'fixed';
        element.style.top = '30px';
        element.style.right = '0';
        element.style.backgroundColor = '#FFAC0A99';
    } else {
        element.style.position = 'relative'; // Trở lại kiểu relative khi cuộn lên trên
        element.style.top = 'unset';
        element.style.right = 'unset';
    }
});


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let listCards  = [];

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/products/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// Phần xem thêm

function hienThi(){
    var button = document.getElementById("^");
    var content = document.getElementById("antt");

    if(content.style.display === "none" || content.style.display === ""){
        content.style.display = "block";
        button.innerHTML = "Ẩn";
    }
    else{
        content.style.display = "none";
        button.innerHTML = "Xem thêm";
    }
}

var content = document.getElementById("content");
var xemThemButton = document.getElementById("xemThem");
var thuGonButton = document.getElementById("thuGon");

function toggleContent() {
    content.style.display = "block";
    xemThemButton.style.display = "none";
    thuGonButton.style.display = "block";
}

function hiden() {
    content.style.display = "none";
    xemThemButton.style.display = "block";
    thuGonButton.style.display = "none";
}