let showMoreUser1 = document.getElementById("showMoreUser1");
let showMoreUser2 = document.getElementById("showMoreUser2");
let showMoreUser3 = document.getElementById("showMoreUser3");

let showLessUser1 = document.getElementById("showLessUser1");
let showLessUser2 = document.getElementById("showLessUser2");
let showLessUser3 = document.getElementById("showLessUser3");

let lock1 = document.getElementById("lock1");
let unlock1 = document.getElementById("unlock1");
let lock2 = document.getElementById("lock2");
let unlock2 = document.getElementById("unlock2");
let lock3 = document.getElementById("lock3");
let unlock3 = document.getElementById("unlock3");

function lockedProfile() {
  showMoreUser1.addEventListener("click", function () {
    showUser1();
  });
  lock1.addEventListener("click", function () {
    hideUser1();
  });
  showLessUser1.addEventListener("click", function () {
    hideUser1();
  });

  showMoreUser2.addEventListener("click", function () {
    showUser2();
  });
  lock2.addEventListener("click", function () {
    hideUser2();
  });
  showLessUser2.addEventListener("click", function () {
    hideUser2();
  });

  showMoreUser3.addEventListener("click", function () {
    showUser3();
  });
  lock3.addEventListener("click", function () {
    hideUser3();
  });
  showLessUser3.addEventListener("click", function () {
    hideUser3();
  });
}

function showUser1() {
  if (unlock1.checked) {
    document.getElementById("user1HiddenFields").classList.toggle("hide");
    document.getElementById("user1HiddenFields").classList.toggle("show");
    showMoreUser1.classList.toggle("show");
    showMoreUser1.classList.toggle("hide");
    showLessUser1.classList.toggle("hide");
    showLessUser1.classList.toggle("show");
  }
}

function showUser2() {
  if (unlock2.checked) {
    document.getElementById("user2HiddenFields").classList.toggle("hide");
    document.getElementById("user2HiddenFields").classList.toggle("show");
    showMoreUser2.classList.toggle("show");
    showMoreUser2.classList.toggle("hide");
    showLessUser2.classList.toggle("hide");
    showLessUser2.classList.toggle("show");
  }
}

function showUser3() {
  if (unlock3.checked) {
    document.getElementById("user3HiddenFields").classList.toggle("hide");
    document.getElementById("user3HiddenFields").classList.toggle("show");
    showMoreUser3.classList.toggle("show");
    showMoreUser3.classList.toggle("hide");
    showLessUser3.classList.toggle("hide");
    showLessUser3.classList.toggle("show");
  }
}

function hideUser3() {
  document.getElementById("user3HiddenFields").classList.toggle("show");
  document.getElementById("user3HiddenFields").classList.toggle("dont__show");
  showLessUser3.classList.toggle("show");
  showLessUser3.classList.toggle("hide");
  showMoreUser3.classList.toggle("hide");
  showMoreUser3.classList.toggle("show");
}

function hideUser2() {
  document.getElementById("user2HiddenFields").classList.toggle("show");
  document.getElementById("user2HiddenFields").classList.toggle("dont__show");
  showLessUser2.classList.toggle("show");
  showLessUser2.classList.toggle("hide");
  showMoreUser2.classList.toggle("hide");
  showMoreUser2.classList.toggle("show");
}

function hideUser1() {
  document.getElementById("user1HiddenFields").classList.toggle("show");
  document.getElementById("user1HiddenFields").classList.toggle("hide");
  showLessUser1.classList.toggle("show");
  showLessUser1.classList.toggle("hide");
  showMoreUser1.classList.toggle("hide");
  showMoreUser1.classList.toggle("show");
}
