import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const {children, title, type} = props;
    return (
    <div className="flex justify-center min-h-screen items-center bg-blue-500">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-100">{title}</h1>
        <p className="font-medium text-black mb-8">
         Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login" ? " Don't have an account? " : " Already have an account? "}  
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
            Register
          </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
            Login
          </Link>
          )}
        </p>
      </div>
    </div>
    )
}

export default AuthLayouts;