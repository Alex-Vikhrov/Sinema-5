const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const date = document.querySelector('.session-date-block');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
let cost = 390;
let totalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked')) {
        event.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});

date.addEventListener('click', (e) => {
    e.target.classList.toggle('activ');
});

menuButton.addEventListener('click', () => {
    menu.classList.toggle("is-open");
})