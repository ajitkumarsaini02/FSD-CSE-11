function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register here");
            resolve();
        }, 10000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Loggin here");
            resolve();
        }, 5000);
    });
}
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetch data form DB");
            resolve();
        }, 3000);
    });
}
function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Display Data");
            resolve();
        }, 6000);
    });
}

register()
    .then(login)
    .then(getData)
    .then(displayData)
    .catch((err) => {
        console.log(err);
    });
login()
    .then(getData)
    .then(displayData)
    .catch((err) => {
        console.log(err);
    });
getData()
    .then(displayData)
    .catch((err) => {
        console.log(err);
    });
displayData()
    .catch((err) => {
        console.log(err);
    });

console.log("Call Another Application");
