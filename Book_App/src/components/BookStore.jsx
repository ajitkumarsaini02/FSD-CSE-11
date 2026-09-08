import Book from "./Book";
const BookStore = () => {
  const bookData = [
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
  ];

  return (
    <div className="bookstore">
      {bookData.map((bookdata, index) => {
        return <Book key={index} {...bookdata}/>;
      })}
    </div>
  );
};

export default BookStore;
