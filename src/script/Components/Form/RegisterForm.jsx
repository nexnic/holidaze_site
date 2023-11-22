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
        setError,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        });

    const OnSubmit = async (data) => {
        const {name,email, Password:password,Avatar:avatar} = data
        const user = {name, email, password, avatar}

        try { 
            const fetching = await fetch('https://api.noroff.dev/api/v1/holidaze/auth/register', {
                method:'POST',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8',
                },
                body:JSON.stringify(user)
            })
            const receiveData = await fetching.json()
            if(fetching.status === 201) {
                console.log(receiveData)
            }
            if(fetching.status === 400) {
               const {message:msg} = receiveData.errors[0]
               setError('apiError', { message: msg });
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(OnSubmit)} className="text-white">
            <div className='mb-3'>
                <label htmlFor='name' className="form-label">Name</label>
                <input type='name' id='name' className="form-control" {...register('name')} />
                <p className='error'>{errors.name?.message}</p>
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className="form-label">Email</label>
                <input type='email' id='email' className="form-control" {...register('email')}/>
                <p className='error'>{errors.email?.message}</p>
            </div>
            <div className='mb-3'>
                <label htmlFor='Password' className="form-label">Password</label>
                <input type='password' className="form-control" id='Password' {...register('Password')}/>
                <p className='error'>{errors.Password?.message}</p>
            </div>
            <div className='mb-3'>
                <label htmlFor='Avatar' className="form-label">Avatar</label>
                <input type='url' id='Avatar'className="form-control" {...register('Avatar')} />
                <p className='error'>{errors.Avatar?.message}</p>
            </div>
            <p className="text-warning">{errors.apiError?.message}</p>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default RegisterForm