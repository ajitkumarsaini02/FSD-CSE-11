const bookData = [
  { title: "JavaScript", image: "./jsbook.jpg", price: 465 },
  { title: "Next JS", image: "./next.jpg", price: 729 },
  { title: "React JS", image: "./react.png", price: 389 },
];

function Book(props) {
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  const title = document.createElement("h2");
    title.innerHTML = props.title;
  const img = document.createElement("img");
  img.setAttribute("src", props.image);
  img.setAttribute("width", "150px");
  img.setAttribute("height", "150px");

  const h2 = document.createElement("h2");
  h2.innerHTML = "Price : " + props.price;

  const btn = document.createElement("button");
  btn.innerHTML = "Add To Cart";
  btn.onclick = () => addToCart(props);

  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(btn);
  return div;
}

const cart = [];
function addToCart(data) {
  cart.push(data);
  console.log(data, "data successfully added");
  alert("Book added succesfully");
}

const bookStore = bookData.map((i) => {
  return Book(i);
});

const parent = document.getElementById("root");
for (const book of bookStore) {
  parent.appendChild(book);
}
