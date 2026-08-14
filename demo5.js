const URL = "https://dummyjson.com/products?limit=10&skip=2";
let rates = 0;
async function loadProduct() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log("res", res);
    console.log("Data", data);
    const tbody = document.getElementById("data");
    data.products.map((i, idx) => {
      tbody.innerHTML += `
            <tr>
                <td>${idx + 1}</td>
                <td>${i.title}</td>
                <td><img src="${i.images[0]}" width=100px height="100px"</td>
                <td>${i.category}</td>
                <td>${i.rating}</td>
                <td>${i.stock}</td>
                <td>${(i.price * rates).toFixed(2)}</td>
                <td><button class="addtocart" data-title="${i.title}">Add to cart</button></td>
                
            </tr>
            `;
    });
  } catch (err) {
    console.log("Error:", err);
  }
}

async function convertPrice() {
  try {
    const URL = "https://open.er-api.com/v6/latest/USD";
    const res = await fetch(URL);
    const data = await res.json();
    console.log("rate", data.rates.INR);
    return data.rates.INR;
  } catch (e) {
    console.log("Error:", err);
  }
}

let arr = [];
const tbody = document.getElementById("data");

tbody.addEventListener("click", (event) => {
  const button = event.target.closest(".addtocart");
  if (button) {
    const productName = button.dataset.title;
    arr.push(productName);
    console.log("Cart items:", arr);
  }

  const placeOrderBtn = event.target.closest(".placeorder");
  if (placeOrderBtn) {
    console.log("Final order:", arr);
    alert(`Your order is placed: ${arr.join(", ")}`);
  }
});

const orderButton = document.createElement("button");
orderButton.className = "placeorder";
orderButton.textContent = "Place Order";

document.body.appendChild(orderButton);

async function test() {
  rates = await convertPrice();
  loadProduct();
}

test();
