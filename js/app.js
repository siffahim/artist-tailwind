//header toggle

const navbar_btn = document.querySelector(".mobile-navbar-btn");
const header_nav = document.querySelector('.header');


navbar_btn.addEventListener('click', () => {
    header_nav.classList.toggle('actived')
})

//counter text

const counterNumbers = document.querySelectorAll(".counter");

const speed = 200;

counterNumbers.forEach(counterNumber => {
    const updateNum = () => {
        const targetNumber = parseInt(counterNumber.dataset.number);
        const initialNumber = parseInt(counterNumber.innerText);
        const incrementNumber = Math.floor(targetNumber / speed);

        if (initialNumber < targetNumber) {
            counterNumber.innerText = `${initialNumber + incrementNumber}+`;

            setTimeout(updateNum, 10)
        }
    }
    updateNum()
})