let darkMode = false;

function toggleDarkMode () {
    const date = document.querySelector(".date");
    const wasCheck = darkMode === true;
    darkMode = !darkMode;

    date.classList.toggle("dark-mode", !wasCheck);
}

document.getElementById("check").addEventListener("click", toggleDarkMode);

function calendarBuilder () {
    document.getElementById("days").innerHTML = "";
    let thisDay = new Date();
    let month = thisDay.getMonth() + 1;
    let year = 2022;
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
    document.getElementById("days").innerHTML = innerHTML;
}

calendarBuilder();
