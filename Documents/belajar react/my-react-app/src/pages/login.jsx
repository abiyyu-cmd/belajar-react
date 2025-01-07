import AuthLayouts from "../komponens/Layout/AuthLayouts";
import FormLogin from "../komponens/fragments/FormLogin";

const LoginPage = () => {
    return (
        <AuthLayouts title="Login" type="login">
            <FormLogin />
        </AuthLayouts>
    );
};
export default LoginPage;