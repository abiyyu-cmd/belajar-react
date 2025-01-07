import AuthLayouts from "../komponens/Layout/AuthLayouts";
import FormRegister from "../komponens/fragments/FormRegister"

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register" type="register">
            <FormRegister />
        </AuthLayouts>
    );
};
export default RegisterPage;