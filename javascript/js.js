// через костер

const women = document.getElementById('women');
const koster = document.getElementById('koster');

document.addEventListener('keydown', function(event) {
    jump();
});

function jump() {
    if (women.classList !='jump') {
    women.classList.add('jump')
    }

    setTimeout( function() {
        women.classList.remove('jump')
    }, 400)
}

let isAlive = setInterval ( function() {
    let womenTop = parseInt (window.getComputedStyle(women).getPropertyValue('top'));
    let kosterLeft = parseInt (window.getComputedStyle(koster).getPropertyValue('left'));

    if (kosterLeft < 50 && kosterLeft > 0 && womenTop >= 55) {
        alert('Game Over!')
    }
}, 10)

// бирюльки

// function chpok(class) {
//   elem = document.getElementById(class); //находим блок div по его id, который передали в функцию
//   state = elem.style.display; //смотрим, включен ли сейчас элемент
//   if (state == "") elem.style.display = "none"; //если включен, то выключаем
//   else elem.style.display = ""; //иначе - включаем
// }

$(".gods").hover(
  function () {
    $(".gods").css("width", "20%");
    $(this).css("width", "50%");
  },
  function () {
    $(".gods").css("width", "30%");
  }
);



const burgerMenu = document.querySelector(‘.burger-menu’);

const mainMenu = document.querySelector(‘.main-menu’);

burgerMenu.addEventListener(‘click’, () => {

mainMenu.classList.toggle(‘active’);

});

(function () {
  var elements = document.getElementsByClassName('g11');
  for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', function () {
          this.style.display = 'none';
      });
  }
})();


