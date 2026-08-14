const URL="https://dummyjson.com/products"
async function loadProduct(){
     try{
        const res= await fetch(URL);
        const data =await res.json();
        console.log("res=",res)
        console.log("Data", data);
        const tbody = document.getElementById("data");
        data.products.map((i) =>{
            tbody.innerHTML += `
            <tr>
                <td>${i.id}</td>
                <td>${i.title}</td>
                <td>${i.category}</td>
                <td>${i.price}</td>
                <td>${i.rating}</td>
            </tr>
            `
        }
        );
    }
    catch(err) {
        console.log("Error:",err)
    }
}

loadProduct()

