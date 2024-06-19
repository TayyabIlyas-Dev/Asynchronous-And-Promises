// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.

function fetchData(){
     console.log('before 1 sec');
     
     return new Promise((resolve)=>setTimeout(()=>resolve("Data fetched successfully!"),1000));
 
 }
 fetchData().then((data)=>
     console.log(data));