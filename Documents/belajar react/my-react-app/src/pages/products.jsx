import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../komponens/fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../komponens/fragments/TableCart";
import Navbar from "../komponens/Layout/Navbar";
import { DarkModeContext } from "../context/DarkMode";
const ProductsPage = () => {
    const { isDarkMode, setIsDarkMode} = useContext(DarkModeContext);
    const [products, setProducts] = useState([]);
    useLogin();

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);
        
    return (
        <Fragment>
            {/* Navbar */}
            <Navbar/>

        <div className={`flex justify-center py-5 ${ isDarkMode && "bg-slate-900"}`}>
           <div className="w-4/6 flex flex-wrap">
           {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer 
                price={product.price} 
                id={product.id}
                />
            </CardProduct>
            ))}
           </div> 
           <div className="w-2/6">
           <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
           <TableCart products={products} />
           </div>
        </div>
        {/* <div className="mt-5 flex justify-center mb-5">
            <Counter></Counter>
        </div> */}
        </Fragment>
    );
};

export default ProductsPage;
