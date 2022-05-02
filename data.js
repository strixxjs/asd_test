const d1 = new Date();
// Wed Apr 27 2022 16:02:33 GMT+0300 (Восточная Европа, летнее время)
console.log(d1);

// милисекунды
const d2 = new Date(1651064779000);
console.log(d2);

// явно (год, месяц, число, час, минута)
const d3 = new Date(2021, 9, 6, 11 ,15);
console.log(typeof d3);
console.log(d3);

// строку в объект
const d4 = new Date("Wed Apr 27 2022 17:24:43 GMT+0300");
console.log(d4);
document.querySelector(".out-1").innerHTML = d4;
document.querySelector(".out-2").innerHTML = d4.toUTCString();
document.querySelector(".out-3").innerHTML = d4.toDateString();
document.querySelector(".out-4").innerHTML = d4.toISOString();

// Стандарты - боль и печаль
// 2021-09-03 2021-03-09 2021/04/09 PM AM

const d20 = new Date();
// методы
console.log(d20.getFullYear());
console.log(d20.getMonth()); // Месяцы идут с 0 до 11
console.log(d20.getDate()); // Ткущая дата идет с 1..31
console.log(d20.getDay()); // Текущий день недели начиная с воскесенья(0), понедельник(1)
console.log(d20.getHours());// 0 до 24
console.log(d20.getMinutes()); // 0 до 59
console.log(d20.getSeconds()); // 0 до 59
console.log(d20.getTime()); // unix time
console.log(Date.now()); // unix time

function addLeadingZero(d) {
    return (d < 10) ? "0" + d : d;
}

function getUserTime(t) {
    let Y = t.getFullYear();
    let M = addLeadingZero(t.getMonth() + 1);
    // if (M < 10) M = "0" + M;
    
    console.log(Y, M);
}

console.log(getUserTime(new Date(1651070972364)));