let dateNow = new Date();

console.log("BEFORE");
console.log(dateNow.toISOString());

const moontMilliseconds = 2692000000;
const yearMilliseconds = moontMilliseconds * 12;

function addMonth() {
    console.log("addMonth");
    dateNow = new Date(dateNow.getTime() + moontMilliseconds);
    buildDate();
}

function addYear() {
    console.log("addYear");
    dateNow = new Date(dateNow.getTime() + yearMilliseconds);
    buildDate();
}

function buildDate() {
    console.log("Build full date", dateNow.toISOString());
}

addMonth();
addYear();

console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());

