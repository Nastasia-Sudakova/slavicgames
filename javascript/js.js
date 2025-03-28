$(".gods").hover(
  function () {
    $(".gods").css("width", "20%");
    $(this).css("width", "50%");
  },
  function () {
    $(".gods").css("width", "30%");
  }
);

// смена картинки на гифку 1
const image = document.getElementById("toggle-image");
let isGif = false;

// Пути к вашим изображениям
const jpgPath = "bumm.jpg";
const gifPath = "anim_gorofki.gif";

image.addEventListener("click", function () {
  if (isGif) {
    // Меняем обратно на JPG
    image.src = jpgPath;
    isGif = false;
  } else {
    // Меняем на GIF
    image.src = gifPath;
    isGif = true;
  }
});

// смена картинки на гифку 2
const image = document.getElementById("toggle-image2");
let isGif = false;

// Пути к вашим изображениям
const jpgPath = "bumm2.jpg";
const gifPath = "anim_gorofki2.gif";

image.addEventListener("click", function () {
  if (isGif) {
    // Меняем обратно на JPG
    image.src = jpgPath;
    isGif = false;
  } else {
    // Меняем на GIF
    image.src = gifPath;
    isGif = true;
  }
});

// прятки
function chpok(id) {
  elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
  state = elem.style.display; //смотрим, включен ли сейчас элемент
  if (state == "") elem.style.display = "none"; //если включен, то выключаем
  else elem.style.display = ""; //иначе - включаем
}

// бирюльки
function chpok1(id) {
  elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
  state = elem.style.display; //смотрим, включен ли сейчас элемент
  if (state == "") elem.style.display = "none"; //если включен, то выключаем
  else elem.style.display = ""; //иначе - включаем
}

// крестики-нолики
const board = document.getElementById("board");
const message = document.getElementById("message");
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningConditions = [
  [0, 1, 2], // Первая строка
  [3, 4, 5], // Вторая строка
  [6, 7, 8], // Третья строка
  [0, 3, 6], // Первый столбец
  [1, 4, 7], // Второй столбец
  [2, 5, 8], // Третий столбец
  [0, 4, 8], // Диагональ
  [2, 4, 6], // Диагональ
];

function handleCellClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;

  checkForWinner();
}

function checkForWinner() {
  let roundWon = false;

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] === "" || gameState[b] === "" || gameState[c] === "") {
      continue;
    }
    if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    message.textContent = `Игрок ${currentPlayer} выиграл!`;
    gameActive = false;
    return;
  }

  if (!gameState.includes("")) {
    message.textContent = "Ничья!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  message.textContent = `Ход игрока ${currentPlayer}`;
}

function resetGame() {
  gameState = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  message.textContent = `Ход игрока ${currentPlayer}`;
  document.querySelectorAll(".cell").forEach((cell) => (cell.textContent = ""));
}

board.addEventListener("click", handleCellClick);
message.textContent = `Ход игрока ${currentPlayer}`;

// баба через костер
const game = document.getElementById("game");
const player = document.getElementById("player");
const scoreElement = document.getElementById("score");
const gameOverElement = document.getElementById("game-over");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

let isJumping = false;
let isGameOver = false;
let score = 0;
let speed = 5;
let gravity = 0.8;
let position = 0;
let obstacles = [];
let gameInterval;
let obstacleInterval;

// Функция прыжка
function jump() {
  if (isJumping || isGameOver) return;

  isJumping = true;
  let jumpCount = 0;
  let jumpHeight = 13;

  let jumpInterval = setInterval(() => {
    if (jumpCount < jumpHeight) {
      position += 15;
      player.style.bottom = position + "px";
      jumpCount++;
    } else if (jumpCount < jumpHeight * 2) {
      position -= 15;
      player.style.bottom = position + "px";
      jumpCount++;
    } else {
      clearInterval(jumpInterval);
      isJumping = false;
    }
  }, 30);
}

// Создание препятствий
function createObstacle() {
  if (isGameOver) return;

  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  game.appendChild(obstacle);

  let obstaclePosition = game.clientWidth;
  obstacle.style.left = obstaclePosition + "px";
  obstacles.push(obstacle);

  let moveObstacle = setInterval(() => {
    if (obstaclePosition < -30) {
      clearInterval(moveObstacle);
      game.removeChild(obstacle);
      obstacles.shift();
      score++;
      scoreElement.textContent = "Очки: " + score;

      if (score % 10 === 0) {
        speed += 0.5;
      }
    } else {
      obstaclePosition -= speed;
      obstacle.style.left = obstaclePosition + "px";

      if (obstaclePosition > 50 && obstaclePosition < 80 && position < 40) {
        gameOver();
      }
    }
  }, 20);
}

// Функция окончания игры
function gameOver() {
  isGameOver = true;
  clearInterval(gameInterval);
  clearInterval(obstacleInterval);
  gameOverElement.style.display = "block";
  restartBtn.style.display = "block";
}

// Перезапуск игры
function restartGame() {
  isGameOver = false;
  score = 0;
  speed = 5;
  position = 0;
  player.style.bottom = position + "px";
  scoreElement.textContent = "Очки: " + score;
  gameOverElement.style.display = "none";
  restartBtn.style.display = "none";

  obstacles.forEach((obstacle) => {
    game.removeChild(obstacle);
  });
  obstacles = [];

  startGame();
}

// Запуск игры
function startGame() {
  startBtn.style.display = "none";
  gameInterval = setInterval(createObstacle, 2000);
}

// Обработка кликов для прыжка
game.addEventListener("click", jump);

// Кнопки управления
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);

// фин
// Ждем полной загрузки страницы
window.addEventListener("load", function () {
  // Искусственная задержка для демонстрации (можно убрать)
  setTimeout(function () {
    // Скрываем прелоадер
    document.getElementById("loader").style.display = "none";
    // Показываем основной контент
    document.getElementById("main-content").style.display = "block";
  }, 2000); // 2 секунды задержки для демонстрации
});
