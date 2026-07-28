function register(cb) {
  setTimeout(() => {
    console.log("Register here");
    cb();
  }, 10000);
}
function login(cb) {
  setTimeout(() => {
    console.log("Loggin here");
    cb();
  }, 5000);
}
function getData(cb) {
  setTimeout(() => {
    console.log("Fetch data form DB");
    cb();
  }, 3000);
}
function displayData(cb) {
  setTimeout(() => {
    console.log("Display Data");
    cb();
  }, 6000);
}

register(() => {
  login(() => {
    getData(() => {
      displayData(() => {});
    });
  });
});

console.log("Call Another Application");
