
const burger = document.querySelectorAll('.menu_btn_burger');
const x = document.querySelector('.fas.fa-times');

// console.log(menu_button);
console.log(burger);

// burger.forEach((button) => {
//   button.addEventListener('click', () => {
//     button.classList.toggle('open');
//   })
// })


for (let i = 0; i < burger.length; i++) {
  let menu_button = document.querySelector('.menu_btn');
  menu_button.addEventListener('click', function () {
    // burger[0].classList.toggle('open');
    // burger[2].classList.toggle('open');
    burger[i].classList.toggle('open');
    x.classList.toggle('show');
  })

}