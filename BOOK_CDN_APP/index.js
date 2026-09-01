function Book(props) {
    const image = React.createElement("img",{src:props.image,width:"100px",height:"150px"},null);
    const title = React.createElement("h2",{style:{color:"red"}},"Title:" + props.title);
    const price = React.createElement("h2",{style:{color:"green"}},"Price:" + props.price);
    const btn = React.createElement("button",{style:{color:"blue"}},"AddToCart");

    const div = React.createElement("div",{className:"book"},[image,title,price,btn]);
    return div;
}
const bookData= [
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iAlq8sUCYrF044d-ct5Sy0QDcObhNEb7NvJr3jy-1g&s=10",title:"ReactJS",price:465},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6PtUTRLEiREYMxy14PqKFakkoBFk5SzpSzZf93lEWg&s=10",title:"NodeJS",price:565},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5lIINe0_t3F56gtwWCH4had0jJUACb5P7C7UsBN1Rg&s",title:"ExpressJS",price:763},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iAlq8sUCYrF044d-ct5Sy0QDcObhNEb7NvJr3jy-1g&s=10",title:"ReactJS",price:465},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6PtUTRLEiREYMxy14PqKFakkoBFk5SzpSzZf93lEWg&s=10",title:"NodeJS",price:565},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5lIINe0_t3F56gtwWCH4had0jJUACb5P7C7UsBN1Rg&s",title:"ExpressJS",price:763},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iAlq8sUCYrF044d-ct5Sy0QDcObhNEb7NvJr3jy-1g&s=10",title:"ReactJS",price:465},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6PtUTRLEiREYMxy14PqKFakkoBFk5SzpSzZf93lEWg&s=10",title:"NodeJS",price:565},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5lIINe0_t3F56gtwWCH4had0jJUACb5P7C7UsBN1Rg&s",title:"ExpressJS",price:763},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iAlq8sUCYrF044d-ct5Sy0QDcObhNEb7NvJr3jy-1g&s=10",title:"ReactJS",price:465},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6PtUTRLEiREYMxy14PqKFakkoBFk5SzpSzZf93lEWg&s=10",title:"NodeJS",price:565},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5lIINe0_t3F56gtwWCH4had0jJUACb5P7C7UsBN1Rg&s",title:"ExpressJS",price:763},
];
function App(){
    const bookStore=bookData.map((b)=> {
        return Book(b)
    })
    const div = React.createElement("div",{className : "bookstore"},[...bookStore])
    return div;
}
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(App())