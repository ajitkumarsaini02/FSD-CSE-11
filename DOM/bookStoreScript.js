const URL = "https://openlibrary.org/search.json?q=javascript&limit=12";
const cart = [];

async function loadBooks() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    const parent = document.getElementById("root");
    data.docs.forEach((book) => {
      const div = document.createElement("div");
      div.setAttribute("class", "card");
      const title = document.createElement("h2");
      title.innerText = book.title || "Unknown Title";
      const img = document.createElement("img");
      if (book.cover_i) {
        img.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
      } else {
        img.src = "https://via.placeholder.com/150";
      }
      img.width = 150;
      img.height = 150;
      const author = document.createElement("p");
      author.innerText = "Author: " + (book.author_name?.[0] || "Unknown");

      const year = document.createElement("p");
      year.innerText = "Year: " + (book.first_publish_year || "N/A");

      const btn = document.createElement("button");
      btn.innerText = "Add To Cart";

      const bookData = {
        title: book.title,
        author: book.author_name?.[0] || "Unknown",
        image: img.src,
        price: 499
      };

      btn.onclick = () => addToCart(bookData);

      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(author);
      div.appendChild(year);
      div.appendChild(btn);

      parent.appendChild(div);
    });

  } catch (err) {
    console.log("Error:", err);
  }
}

const viewCart = document.getElementById("viewCart");

viewCart.onclick = () => showCart();

function addToCart(book) {
  cart.push(book);
  console.log("Added:", book);
  alert("Book added successfully");
}

function showCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.style.display = "block";
  cartDiv.innerHTML = "<h2>🛒 Your Cart</h2>";
  let total = 0;
  cart.forEach((book) => {
    total += book.price;
    cartDiv.innerHTML += `
      <div>
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Price: ₹${book.price}</p>
      </div>
      <hr>
    `;
  });

  cartDiv.innerHTML += `
    <h3>Total Books: ${cart.length}</h3>
    <h3>Total Price: ₹${total}</h3>
  `;
}

loadBooks();