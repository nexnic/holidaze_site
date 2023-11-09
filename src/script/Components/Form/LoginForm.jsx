// Import 
    // React 
    import { useForm } from "react-hook-form";
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";

        // Type 
type FormValues = {
    email:string,
    Password:string,
} 

const schema = yup.object({
    email: yup
        .string()
        .email('Email format is not valid')
        .required('Email is Required')
        .matches(
            /^[a-z0-9._%+-]+@(stud.noroff.no)$/,
            'You Need A Email and with stud.noroff.no'
        ),
        Password: yup 
            .string()
            .required('Password is Required')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                'Password must contain at least 8 characters, one uppercase, one number and one special case character'
            )
})

function LoginForm () {

    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            Password: "",
        },
        resolver: yupResolver(schema)
    })
    const {register, handleSubmit, formState} = form
    const {errors} = formState

    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='from-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' className='form-control' {...register('email')} />
                <p style={{color: 'white'}}>{errors.email?.message}</p>
            </div>
            <div className='form-group'>
                <label htmlFor='Password'>Password</label>
                <input type='password' className='form-control' {...register('Password')}/>
                <p style={{color: 'white'}}>{errors.Password?.message}</p>
            </div>
            <div className='form-group'>
                <div className='form-check'>
                    <input type='checkbox' className='form-check-input' />
                    <label htmlFor='dropdownCheck' className='form-check-label' >
                        Remember Me
                    </label>
                </div>
            </div>
            <button>Login</button>
        </form>
    )
}

export default LoginForm 