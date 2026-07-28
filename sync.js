function register(){
    waitfordealy(1000);
    console.log("Register here");
}
function login(){
    waitfordealy(4000);
    console.log("Loggin here");
}
function getData(){
    waitfordealy(3000);
    console.log("Fetch data form DB");
}
function displayData(){
    waitfordealy(6000);
    console.log("Display Data");
}
function waitfordealy(delay){
    const start = Date.now() + delay;
    while (Date.now() < start) {
        
    }
}

register();
login();
getData();
displayData();
console.log("Call Another Application");