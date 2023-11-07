const countdown = document.querySelector(".countdown")
const setBtn = document.querySelector(".set")
const timerList = document.querySelector(".timer-list")


// document.getElementById('id01').style.display='block'

setBtn.addEventListener("click", (e) =>{
    console.log("clicked");

    // document.querySelector(".timer-list").style.visibility='visible';

    let newDiv = document.createElement("div")
    newDiv.appendChild(timerList)

    

})



const deadline = new Date(2024, 7, 15, 12, 00, 00)

const interval = setInterval(() =>{


    console.log(deadline);

        // CALCUTATION OF REMAINING TIME
        
        const current = new Date();
        const diff = deadline -current;
        
        // take the time as ms
        console.log(diff);
        
        // REMAINING DAYS
        
        const days = Math.floor(diff/(1000 * 60 * 60 *24) + "") // finds how many days left...  1000ms * 60 seconds * 60 minute * 24 hour
        console.log(days);
        
        // REMAINING HOURS
        const hours = Math.floor(diff/(1000 * 60 * 60) % 24) + "";  // We need to use mode for finds to remaining hours
        console.log(hours);
        
        
        // REMAINING MINUTES
        const minutes = Math.floor(diff/(1000 * 60) % 60) + "";
        console.log(minutes);
        
        //REMAINIG SECONDS
        
        const seconds = Math.floor(diff/(1000) % 60) + ""; // converted string with "" for sliping -s statement


        
        // set interval method used for updated countdown inner html


        // data-content is used to store speacial information into HTML elements
        
        // data-content is used in style.css as countdown div pseudo elements.
        countdown.innerHTML = `
            <div data-content="Days">${days.length === 1 ? `0${days}`: days}</div>
            <div data-content="Hours">${hours.length === 1 ? `0${hours}`: hours}</div>
            <div data-content="Minutes">${minutes.length === 1 ? `0${minutes}`: minutes}</div>
            <div data-content="Seconds">${seconds.length === 1 ? `0${seconds}`: seconds}</div>
        `
    
if(diff < 0){
    clearInterval(interval);
    countdown.innerHTML = "<h1> Here we go!!! </h1>"
}    
    

document.querySelector(".reset").
    addEventListener("click", ()=>{
        clearInterval(interval);

        // we selected all divs inside the countdown div.

        const divs = document.querySelectorAll(".countdown div");

        divs.forEach(div => {
            div.innerHTML = "00"
        })
    })


}, 1000) // this function runs every 1 seconds



// GETTING MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//GETTING MODAL ENDED

