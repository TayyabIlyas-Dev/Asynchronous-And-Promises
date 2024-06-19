// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

async function fetchGreeting(name:string) {

     let printFront = 'Please Wait 2 Sec For printing Message'

     console.warn(printFront);
     
    setTimeout((e) => {
        console.log(name);
        
     }, 2000);
    
}

fetchGreeting('Assalamualikum  Sir Hamza & Miss Minaheel 👋 ')
