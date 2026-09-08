
const Book = (props) => {
  return (
    <div className="book">
      <img
        src={props.image}
        width={100}
        height={100}
        alt="Book Image"
      />
      <h2>Title: {props.title}</h2>
      <h2>Price: &#8377;{props.price}</h2>
      <button>Add to cart</button>
    </div>
  );
};

export default Book;
