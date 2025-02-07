import { useLogin } from "../../hooks/useLogin"
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from "../elements/Button"
import { useSelector } from "react-redux";
import { DarkModeContext } from "../../context/DarkMode"


const Navbar = () => {
    const username = useLogin();
    const { isDarkMode, setIsDarkMode }= useContext(DarkModeContext);
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const [ searchText, setSearchText] = useState("");


    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleClearSearch = () => {
        setSearchText("");
    }
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };
    return (
                <div className="flex justify-between items-center bg-blue-600 h-16 px-5">
                    <div className="flex items-center">
                        <img 
                            src= "../../Images/test.jpg"
                            alt="Logo"
                            className="h-32 w-auto object-contain"
                            />
                    </div>  

                            <div className="relative mx-auto w-1/2">
                            <FontAwesomeIcon>
                            icon={faSearch}
                                className="absolute top-2.5 left-3 text-gray-400"
                            </FontAwesomeIcon>
                                <input
                                type="text"
                                placeholder="Search..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="w-full p-2 pl-10 border border-gray-300 rounded text-black"
                                />
                                {searchText && (
                                    <FontAwesomeIcon
                                    icon={faTimes}
                                    onClick={handleClearSearch}
                                    className="absolute top-3.5 right-3 cursor-pointer text-black"
                                    />
                                )}
                            </div>


                        <div className="flex items-center gap-x-5">
                            <div className="font-extrabold text-white">{username}</div>
                            <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
                        </div>


                        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 text-white mr-5">
                            {totalCart}
                        </div>

                        <Button className="bg-black px-10 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
                            {isDarkMode ? "Light" : "Dark"}
                        </Button>
                </div>
    );
};

export default Navbar;
