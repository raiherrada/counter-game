
let counterElHome = document.getElementById("counter_home");
let counterElGuest = document.getElementById("counter_guest");
let newGameEl = document.getElementById("new-game-btn");
let countHome = 0;
let countGuest = 0;

function homebtnone(){
    countHome += 1;
    counterElHome.textContent = countHome;
}

function homebtntwo(){
    countHome += 2;
    counterElHome.textContent = countHome;
}

function homebtnthree(){
    countHome += 3;
    counterElHome.textContent = countHome;
}

function guestbtnone(){
    countGuest += 1;
    counterElGuest.textContent = countGuest;
}

function guestbtntwo(){
    countGuest += 2;
    counterElGuest.textContent = countGuest;
}

function guestbtnthree(){
    countGuest += 3;
    counterElGuest.textContent = countGuest;
}

function newGameBtn(){
    counterElHome.textContent = 0;
    counterElGuest.textContent = 0;
    countGuest = 0;
    countHome = 0;
}