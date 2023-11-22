import RegisterForm from "../../Components/Form/RegisterForm"

function RegisterPage (){
    return (
        <main className="d-flex justify-content-center p-3">
            <div className="w-75">
                <h2 className="text-white">Become a member</h2>
                <p className="text-white">Fill in all the fields below. be sure to choose a secure password</p>
                <RegisterForm />
            </div>
        </main>
    )
}

export default RegisterPage