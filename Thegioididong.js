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
                        <li><button><i class="fa-solid fa-circle-plus" style="color: #0400ff;"></i> so sánh</button>
                        </li>
                    </div>
                </div>
            </a>
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