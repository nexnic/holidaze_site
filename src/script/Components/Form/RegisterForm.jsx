// Import 
    // React 
    import { useForm } from "react-hook-form";
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";


const schema = yup.object({
    name: yup
        .string()
        .required('Name is Required'),
    email: yup 
        .string()
        .email('Email Format Is not Valid')
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
        ),
    Avatar: yup
        .string().url()

});


function RegisterForm (){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        });

    const OnSubmit = async (data) => {
        const {name,email, Password:password,Avatar:avatar} = data
        const user = {name, email, password, avatar}
        console.log(user)

        try {
            const fetching = await fetch('https://api.noroff.dev/api/v1/holidaze/auth/register', {
                method:'POST',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8',
                },
                body:JSON.stringify(user)
            })
            const receiveData = await fetching.json()
            console.log(fetching)
            if(fetching.status === 200) {
                console.log(receiveData)
            }
            if(fetching.status === 400) {
                console.log(receiveData.status)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input type='name' id='name' {...register('name')} />
                <p className='error'>{errors.name?.message}</p>
            </div>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' {...register('email')}/>
                <p className='error'>{errors.email?.message}</p>
            </div>
            <div className='form-control'>
                <label htmlFor='Password'>Password</label>
                <input type='password' id='Password' {...register('Password')}/>
                <p className='error'>{errors.Password?.message}</p>
            </div>
            <div className='form-control'>
                <label htmlFor='Avatar'>Avatar</label>
                <input type='url' id='Avatar' {...register('Avatar')} />
                <p className='error'>{errors.Avatar?.message}</p>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default RegisterForm