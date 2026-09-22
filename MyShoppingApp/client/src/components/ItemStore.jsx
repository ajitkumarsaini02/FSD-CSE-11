
import Item from "./Item";

// const URL = "https://dummyjson.com/products";

const ItemStore = () => {
  const itemData = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iAlq8sUCYrF044d-ct5Sy0QDcObhNEb7NvJr3jy-1g&s=10",
      title: "ReactJS",
      price: 465,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6PtUTRLEiREYMxy14PqKFakkoBFk5SzpSzZf93lEWg&s=10",
      title: "NodeJS",
      price: 565,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5lIINe0_t3F56gtwWCH4had0jJUACb5P7C7UsBN1Rg&s",
      title: "ExpressJS",
      price: 763,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71A7t9Ze-jL._AC_UF1000,1000_QL80_.jpg",
      title: "Engineering Graphics",
      price: 564,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslMeGoVmJeF8P5qrnJ8XXJAlyawkfIRv60G5A6cbmYg&s=10",
      title: "Technical Communication",
      price: 224,
    },
    {
      image:
        "https://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975484.jpg",
      title: "Mechanical Engineering",
      price: 863,
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUGw1NNFdUWZostWlXLF_5bTm04xOo4XYtb-VdA0XCjiFwdr7jX0lt1Q&s=10',
      title:"Engineering Drawing",
      price: 673,
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3Q-jJoSbfGoSvedSgfuxCaEBG18NJbPjFLgqg0fA0KB2XvzLG9ObskI&s=10',
      title:"Civil Engineering",
      price: 874,
    }
  ];
  return (
    <div className="home">
      {itemData.map((item, index) => (
        <Item key={index} props={item} />
      ))}
    </div>
  );
};

export default ItemStore;
