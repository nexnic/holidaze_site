// Import 
    // React 
    import { useForm } from "react-hook-form";
    
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";
//import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../Storage/useLocalStorage";

import { useNavigate } from "react-router-dom";
//import { useState } from "react";

        // Type 
/*
type FormValues = {
    email:string,
    Password:string,
} 
*/



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
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
      });

    const [userData, setUserDate] = useLocalStorage('userData', {})
    const navigate = useNavigate()

    const OnSumit = async (data) => {
        const {email, Password:password} = data
        const user = {email, password}
        
        
        
        try{
            const fetching = await fetch('https://api.noroff.dev/api/v1/holidaze/auth/login', {
                method:'POST',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8',
                },
                body:JSON.stringify(user)
            })
            const receiveData = await fetching.json()
                
            if(fetching.status === 200) {
                const {name} = receiveData
                setUserDate(receiveData)
                navigate(`profile/${name}`)
            }
            if(fetching.status > 400 && fetching.status < 499){
                const {message:msg} = receiveData.errors[0]
                setError('apiError', {message: msg})
            }

        } catch (error) {
            console.log(error)
        }
    }
    
    return (
    <div className="d-block position-absolute  top-100 bg-black px-4 py-3 mt-2" style={{zIndex: 300, color: 'white'}}>
        <form onSubmit={handleSubmit(OnSumit)}>
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
            <div className="dropdown-divider"></div>
            <div className='form-group'>
                <div className='form-check'>
                    <input type='checkbox' className='form-check-input' />
                    <label htmlFor='dropdownCheck' className='form-check-label' >
                        Remember Me
                    </label>
                </div>
            </div>
            <p className="text-warning">{errors.apiError?.message}</p>
            <button className="btn btn-primary">Login</button>
        </form>
        </div>
    )
}

export default LoginForm 