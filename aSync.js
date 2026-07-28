function register(){
    setTimeout(() => {
        console.log("Register here");
    }, 10000);
}
function login(){
    setTimeout(() => {
        console.log("Loggin here");
    }, 5000);
}
function getData(){
    setTimeout(() => {
        console.log("Fetch data form DB");
    }, 3000);
}
function displayData(){
    setTimeout(() => {
        console.log("Display Data");
    }, 6000);
}

register();
login();
getData();
displayData();
console.log("Call Another Application");