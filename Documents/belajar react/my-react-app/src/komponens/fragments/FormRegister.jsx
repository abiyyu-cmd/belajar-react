import Button from "../elements/Button";
import InputForm from "../elements/input/Index";

const FormLogin = () => {
    return (
        <form action="">
          <InputForm
            label="Fullname" 
            type="text" 
            placeholder="insert your name here... " 
            name="fullname"
          />
          <InputForm
            label="Email" 
            type="email" 
            placeholder="Example@gmail.com" 
            name="email"
          />
          <InputForm
            label="Password" 
            type="password" 
            placeholder="******" 
            name="password"
          />
          <InputForm
            label="Confirm Password" 
            type="Password" 
            placeholder="insert your name here... " 
            name="confirmPassword"
          />
        <Button classname ="bg-blue-600 w-full">Register</Button>
      </form>
    )
}

export default FormLogin;