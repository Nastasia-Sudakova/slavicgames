// через костер
// const sheepjump = document.getElementById("sheepjump");
// const tree = document.getElementById("tree");

// document.addEventListener("click", function (event) {
//   jump();
// });

// function jump() {
//   if (sheepjump.classList != "jump") {
//     sheepjump.classList.add("jump");
//   }
//   setTimeout(function () {
//     sheepjump.classList.remove("jump");
//   }, 700);
// }

// let isAlive = setInterval(function () {
//   let sheepjumpTop = parseInt(
//     window.getComputedStyle(sheepjump).getPropertyValue("top")
//   );
//   let treeLeft = parseInt(
//     window.getComputedStyle(tree).getPropertyValue("left")
//   );

//   if (treeLeft < 50 && treeLeft > 0 && sheepjumpTop >= 140) {
//     // alert("Игра закончена")
//   }
// }, 10);

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

function chpok(class) {
  elem = document.getElementById(class); //находим блок div по его id, который передали в функцию
  state = elem.style.display; //смотрим, включен ли сейчас элемент
  if (state == "") elem.style.display = "none"; //если включен, то выключаем
  else elem.style.display = ""; //иначе - включаем
}

// $(".g2").click(function () {
//   $(this).toggle();
// });

// $(".g3").click(function () {
//   $(this).toggle();
// });

// $(".g4").click(function () {
//   $(this).toggle();
// });

// $(".g5").click(function () {
//   $(this).toggle();
// });

// $(".g6").click(function () {
//   $(this).toggle();
// });

// $(".g7").click(function () {
//   $(this).toggle();
// });

// $(".g8").click(function () {
//   $(this).toggle();
// });

// $(".g9").click(function () {
//   $(this).toggle();
// });

// $(".g10").click(function () {
//   $(this).toggle();
// });

// $(".g11").click(function () {
//   $(this).toggle();
// });

// $(".g12").click(function () {
//   $(this).toggle();
// });

// $(".g13").click(function () {
//   $(this).toggle();
// });

// $(".g14").click(function () {
//   $(this).toggle();
// });

// $(".g15").click(function () {
//   $(this).toggle();
// });

// $(".g16").click(function () {
//   $(this).toggle();
// });

// $(".g17").click(function () {
//   $(this).toggle();
// });

// $(".g18").click(function () {
//   $(this).toggle();
// });

// $(".g19").click(function () {
//   $(this).toggle();
// });

// $(".g20").click(function () {
//   $(this).toggle();
// });

// $(".g21").click(function () {
//   $(this).toggle();
// });

// $(".g22").click(function () {
//   $(this).toggle();
// });

// $(".g23").click(function () {
//   $(this).toggle();
// });

// $(".g24").click(function () {
//   $(this).toggle();
// });
//  боги
// $(".god_anima").draggable({ addClass: false });

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