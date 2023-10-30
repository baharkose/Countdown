const countdown = document.querySelector(".countdown")

const deadline = new Date(2024, 7, 15, 12, 00, 00)

console.log(deadline);

const current = new Date();
const diff = deadline -current;

console.log(diff);

const days = Math.floor(diff/(1000 * 60 * 60 *24)) // finds how many days left...  1000ms * 60 seconds * 60 minute * 24 hour
console.log(days);
