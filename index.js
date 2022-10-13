let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let period = document.getElementById("period");
let homeFouls = document.getElementById("fouls-home");
let guestFouls = document.getElementById("fouls-guest");
let foulNumber = document.getElementById("foul-amount");
let foulPlayerNumber = document.getElementById("player-number");
let timeMinute = document.getElementById("time1");
let timeSecond = document.getElementById("time2");
let amountRunning = 0;
var players1 = new Array(5);
var players2 = new Array(5);
var playerFoulCounter1 = new Array(5);
var playerFoulCounter2 = new Array(5);

homeScore.textContent = 0;
guestScore.textContent = 0;
period.textContent = 1;
homeFouls.textContent = 0;
guestFouls.textContent = 0;
foulNumber.textContent = 0;
foulPlayerNumber.textContent = 0;
timeMinute.textContent = "00";
timeSecond.textContent = "00";

const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
      };

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    let intervalCall = setInterval(function () {
        if(amountRunning > 1 || (timeMinute == 0 && timeSecond == 0)){
            clearInterval(intervalCall);
            amountRunning --;
        }

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        if(amountRunning < 2){
            timeMinute.textContent = minutes;
            timeSecond.textContent = seconds;
        }

        --timer;

        }, 1000);
}

function initializePlayers() {
    for(var i = 0; i < 5; i++){
        players1[i] = generateRandomNumber(0, 100);
        players2[i] = generateRandomNumber(0, 100);
        playerFoulCounter1[i] = 0;
        playerFoulCounter2[i] = 0;
    }
}

initializePlayers();

function plusOne(number) {
    if(number == 1){
        homeScore.textContent = Number(homeScore.textContent) + 1;
    }
    else if(number == 2){
        guestScore.textContent = Number(guestScore.textContent) + 1;
    }
}

function plusTwo(number) {
    if(number == 1){
        homeScore.textContent = Number(homeScore.textContent) + 2;
    }
    else if(number == 2){
        guestScore.textContent = Number(guestScore.textContent) + 2;
    }
}

function plusThree(number) {
    if(number == 1){
        homeScore.textContent = Number(homeScore.textContent) + 3;
    }
    else if(number == 2){
        guestScore.textContent = Number(guestScore.textContent) + 3;
    }
}

function addFoul(number){
    const random = generateRandomNumber(0, 5);
    if(number == 1){
        homeFouls.textContent = Number(homeFouls.textContent) + 1;
        foulPlayerNumber.textContent = players1[random];
        foulNumber.textContent = (playerFoulCounter1[random]++) + 1;
    }
    else if(number == 2){
        guestFouls.textContent = Number(guestFouls.textContent) + 1;
        foulPlayerNumber.textContent = players2[random];
        foulNumber.textContent = (playerFoulCounter2[random]++) + 1;
    }
}

function addTime(number){
    ++amountRunning;
    timeMinute.textContent = "0" + Number(number)/60;
    startTimer(Number(number));
    timeRunning = true;
}