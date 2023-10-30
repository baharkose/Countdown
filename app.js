const countdown = document.querySelector(".countdown")

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
    clear(interval);
    countdown.innerHTML = "<h1> Here we go!!! </h1>"
}    
    


},1000) // this function runs every 1 seconds



