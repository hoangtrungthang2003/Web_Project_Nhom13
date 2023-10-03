// adress form btn

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
