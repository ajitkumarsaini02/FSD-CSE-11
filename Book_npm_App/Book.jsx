
import React from "react";

function Book() {
    return(
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iAlq8sUCYrF044d-ct5Sy0QDcObhNEb7NvJr3jy-1g&s=10" width={100} height={100} alt="Book Image"/>
            <h2>Title: ReactJS</h2>
            <h2>Price: 465</h2>
            <button>Add to cart</button>
        </div>
    )
}

export default Book;