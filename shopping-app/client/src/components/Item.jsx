
import "./item.css"

const Item = ({props}) => {
  return (
    <div className="item">
      <img src={props.image} width={100} height={100} alt="Item Image"/>
      <h2>Title: {props.title}</h2>
      <h3>Price: &#8377;{props.price}/-</h3>
      <button className="btn">Add To Cart</button>
    </div>
  )
}

export default Item
