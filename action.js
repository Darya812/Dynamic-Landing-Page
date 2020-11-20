let time = document.getElementById ("time");
let name = document.getElementById ("name");
let greeting = document.getElementById ("greeting");
let focus = document.getElementById ("focus");

const showAmPm = true;


function showTime () {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();


    const amPM = hour >= 12 ? "PM" : "AM";


    hour = hour % 12 || 12;


    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPM : ''}`;


    
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = 'url("https://img1.goodfon.ru/wallpaper/nbig/5/e0/utro-leto-derevya-svet-peyzazh.jpg")';
        greeting.textContent = "Good Morning";
        document.body.style.backgroundSize = "100% 100%";
    } else if (hour < 18) {
        document.body.style.backgroundImage = 'url("https://img5.goodfon.ru/wallpaper/nbig/a/1e/solntse-den-peizazh.jpg")';
        greeting.textContent = "Good Afternoon";
        document.body.style.backgroundSize = "100% 100%";
    } else {
        document.body.style.backgroundImage = 'url("https://w-dog.ru/wallpapers/11/2/337769974592310.jpg")';
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
        document.body.style.backgroundSize = "100% 100%";
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if(e.type === 'keypress') {
        if (e.which == 13 || e.keyCode ==13) {
            localStorage.setItem('name', e.target.innerText)
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if(e.type === 'keypress') {
        if (e.which == 13 || e.keyCode ==13) {
            localStorage.setItem('focus', e.target.innerText)
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();