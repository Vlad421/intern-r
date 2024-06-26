import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState();
    const [isLoaded, setLoaded] = useState();
    const [filterString, setFilterString] = useState("");



    const getFilterInput = (e) => {


        setTimeout(() => {
            setFilterString(e);

        }, 500);

    }

    useEffect(() => {

        setTimeout(() => {

            fetch("http://localhost:3030/products").
                then(
                    responce => {
                        return responce.json();
                    }
                ).then(
                    data => {

                        setProducts(data);
                        setLoaded(true);
                    }
                )
        }, 1000);

    });


    return (
        <div>
            <div className="logout">

                <input type="text" placeholder="Filter.. (by name or description)" onChange={e => { getFilterInput(e.target.value) }} />
                <Link to="/" style={{ marginLeft: "auto" }}><button className="logoutButton" >LogOut</button></Link>

            </div>
            <div className="products">
                <div>Products</div>
                {!isLoaded && <div>Loading....</div>}

                <div className="product-list">
                    {products && products.map(prod => {

                        if (prod.name.toLowerCase().includes(filterString.toLowerCase()) || prod.description.toLowerCase().includes(filterString.toLowerCase()) || filterString === "") {

                            return (
                                <div className="prod-preview" key={prod.id} >
                                    <h2>{prod.name}</h2>
                                    <img className="prod-img-prev" width="300" height="300" alt="" />
                                    <p className="prod-desc" >{prod.description.length > 150 ? prod.description.substring(0, 150) : prod.description}</p>
                                    <p>{prod.price}</p>
                                </div>);
                        }

                    }



                    )}
                </div>
            </div>
        </div>)
        ;
}

export default Products;