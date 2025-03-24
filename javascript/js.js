// через костер

const women2 = document.getElementById('women2');
const koster = document.getElementById('koster');

document.addEventListener('keydown', function(event) {
    jump();
});

function jump() {
    if (women2.classList !='jump') {
    women2.classList.add('jump')
    }

    setTimeout( function() {
        women2.classList.remove('jump')
    }, 400)
}

let isAlive = setInterval ( function() {
    let women2Top = parseInt (window.getComputedStyle(women2).getPropertyValue('top'));
    let kosterLeft = parseInt (window.getComputedStyle(koster).getPropertyValue('left'));

    if (kosterLeft < 50 && kosterLeft > 0 && women2Top >= 55) {
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


document.addEventListener("DOMContentLoaded", function(){
  let flo = document.querySelectorAll(".oo1, .oo2, .oo3, .oo4");

  flo.forEach(function(flowers){
      let isDragging = false;
      let offsetX = 0;
      let offsetY = 0;
      let startX = 0;
      let startY = 0;
      let currentX = 0;
      let currentY = 0;

      flowers.addEventListener("mousedown", function(event){
          isDragging = true;

          // Считываем начальные координаты
          startX = event.clientX;
          startY = event.clientY;

          // Считываем текущий `transform`, если он есть
          let transform = window.getComputedStyle(flowers).transform;

          if (transform !== "none") {
              let matrix = new DOMMatrix(transform);
              currentX = matrix.m41; // Смещение по X
              currentY = matrix.m42; // Смещение по Y
          }

          function onMouseMove(event){
              if (isDragging) {
                  offsetX = event.clientX - startX;
                  offsetY = event.clientY - startY;

                  flowers.style.transform = `translate(${currentX + offsetX}px, ${currentY + offsetY}px)`;
              }
          }

          function onMouseUp(){
              isDragging = false;

              // Обновляем текущие координаты после отпускания
              currentX += offsetX;
              currentY += offsetY;

              document.removeEventListener("mousemove", onMouseMove);
              document.removeEventListener("mouseup", onMouseUp);
          }

          document.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseup", onMouseUp);
      });
  });
});

// крестики-нолики
var elements = document.getElementsByClassName('counting');
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function() {
    var style = this.getElementsByClassName("oo1")[0].style;
    if (style.display == 'none') {
        style.display = 'inline';
      } else {
        var style = this.getElementsByClassName("oo1")[0].style;
    if (style.display == 'none') {
        style.display = 'inline';
      } else {
        style.display = 'none';
      }
      }
  }
}


(function($) {
 
  $('.gif-with-play').on('click', function() {
 
    var $this   = $(this),        
        $img    = $this.children('img'),
        $imgSrc = $img.attr('src'),
        $imgSrcgif = $img.attr('data-srcgif'),
        $imgExt = $imgSrcgif.split('.');
 
    if($imgExt[1] === 'gif') {
      $this.addClass('loading-hide');
 
      $img.attr('src', $img.data('srcgif')).attr('data-srcgif', $imgSrc);
 
      $($img).load(function(){
        $this.removeClass('loading-hide');
      });   
    } else {
      $img.attr('src', $imgSrcgif).attr('data-srcgif', $img.data('srcgif'));
    }
 
    $this.toggleClass('play');
 
  });
 
})(jQuery);

// баба через костер
const women2 = document.getElementById('women2');
const koster = document.getElementById('koster');
const imageUpload = document.getElementById('imageUpload');

let isJumping = false;

// Функция для прыжка
function jump() {
    if (isJumping) return;
    isJumping = true;
    let position = 0;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            // Падение вниз
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    women2.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            // Подъем вверх
            position += 20;
            women2.style.bottom = position + 'px';
        }
    }, 20);
}

// Обработчик нажатия клавиши
// document.addEventListener('keydown', (event) => {
//     if (event.code === 'Space') {
//         jump();
//     }
// });

// Обработчик загрузки изображения
// imageUpload.addEventListener('change', (event) => {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//           women2.style.backgroundImage = `url('${e.target.result}')`;
//         };
//         reader.readAsDataURL(file);
//     }
// });

// Проверка столкновений
function checkCollision() {
    const women2Bottom = parseInt(window.getComputedStyle(women2).getPropertyValue('bottom'));
    const kosterRight = parseInt(window.getComputedStyle(koster).getPropertyValue('right'));

    if (kosterRight > 50 && kosterRight < 90 && women2Bottom <= 40) {
        alert('Игра окончена!');
        koster.style.animation = 'none';
        koster.offsetHeight; // Триггер перерисовки
        koster.style.animation = null;
    }
}

setInterval(checkCollision, 10);