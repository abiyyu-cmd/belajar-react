import { Link } from "react-router-dom";
import Button from "../elements/Button";
const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-60 max-h-96 bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image, id } = props;
    return (
        <Link to={`/product/${id}`}>
                <img 
                src={image} 
                alt="product" 
                className="p-8 rounded-t-lg h-48 w-full object-cover"></img>
         </Link>
    );
};

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-4 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {name.substring(0, 15)} ...
                </h5>
                <p className="text-s text-white">
                    {children.substring(0, 40)}
                </p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { price, handleAddToCart, id } = props;

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-lg font-bold text-white">${" "}{price.toLocaleString("id-ID", {styles: "currency", currency: 'USD' })}</span>
            <Button className="bg-blue-600"onClick={() => handleAddToCart(id)}>Checkout </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;