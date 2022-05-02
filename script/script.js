let darkMode = false;
let dateNow = new Date();

const monthMilliseconds = 2692000000;
const yearMilliseconds = monthMilliseconds * 12;

const MONTHS = ["January", "February", "March", "April", "May", 
"June", "July", "August", "September", "October", "November", "December"];

function toggleDarkMode () {
    const date = document.querySelector(".date");
    const wasCheck = darkMode === true;
    darkMode = !darkMode;

    date.classList.toggle("dark-mode", !wasCheck);
}

document.getElementById("check").addEventListener("click", toggleDarkMode);

function calendarBuilder () {
    document.getElementById("days").innerHTML = "";
    // document.getElementById("years").innerHTML = "";
    let thisDay = new Date();
    let month = thisDay.getMonth() + 1;
    // let years = 2024;
    let innerHTML = "";
    let monthDays = {1: 31,
                    2: 28,
                    3: 31,
                    4: 30,
                    5: 31,
                    6: 30,
                    7: 31,
                    8: 31,
                    9: 30,
                    10:31,
                    11:30,
                    12:31};
    for (let day = 1; day <= monthDays[month]; day++) {
        innerHTML =  innerHTML + `<div class="date__daysItem"><p>${day}</p></div>`;
        // debugger;
    }
    
    // document.getElementById("years").innerHTML = years;
    document.getElementById("days").innerHTML = innerHTML;
}



function addOneMonth() {
    dateNow = new Date(dateNow.getTime() + monthMilliseconds);
    // debugger;
    document.getElementById("month").innerHTML = MONTHS[dateNow.getMonth()];
}

document.getElementById("addOneMonth").addEventListener("click", addOneMonth); 

function substractOneMonth() {
    dateNow = new Date(dateNow.getTime() - monthMilliseconds);
    // debugger;
    document.getElementById("month").innerHTML = dateNow.getMonth();
}

document.getElementById("substractOneMonth").addEventListener("click", substractOneMonth); 

function addYear() {
    dateNow = new Date(dateNow.getTime() + yearMilliseconds);
    // debugger;
    document.getElementById("years").innerHTML = dateNow.getFullYear();
}

document.getElementById("addOneYear").addEventListener("click", addYear);   

function substractOneYear() {
   dateNow = new Date(dateNow.getTime() - yearMilliseconds);
   // debugger;
   document.getElementById("years").innerHTML = dateNow.getFullYear();
}

document.getElementById("substractOneYear").addEventListener("click", substractOneYear);   

function toggleDatePicker() {
    document.getElementById("date").classList.toggle("hidden");
    // debugger;
}

document.getElementById("dateinput").addEventListener("click", toggleDatePicker);

function selectDate(event) {
    
}

calendarBuilder();

[...document.getElementsByClassName("date__daysItem")].forEach(
    (element, index, array) => {
        // debugger;
        element.addEventListener("click", selectDate);
    }
);

