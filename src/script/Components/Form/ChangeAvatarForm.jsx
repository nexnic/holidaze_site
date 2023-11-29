// Import 
    // React 
    import { useForm } from "react-hook-form";
    
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";
import GetLocal from "../../Storage/GetLocal";
const schema = yup.object({
    avatar: yup 
        .string()
        .required('url is Required')
        .matches(
            /https?:\/\/.*\.(?:png|jpg)$/, 
            'You need a valide url Format png or jpg'
        ),
})


function ChangeAvatarForm () {
    const {name,accessToken} = GetLocal('userData')
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
      });
    
      const OnSumit = async (data) =>  {
        try {
            const fetching = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`, {
                method:'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8',
                    Authorization: `Bearer ${accessToken}`,
                },
                body:JSON.stringify(data)
            })
            const receiveData = await fetching.json()
            if(fetching.status === 200) {
                localStorage.setItem('userData', JSON.stringify(receiveData))
                window.location.reload()
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
        <form onSubmit={handleSubmit(OnSumit)}>
            <div className="input-group mb-3">
                <label htmlFor="avatar">Avatar</label>
                <input type="text" className="form-control" style={{backgroundColor: 'white'}} {...register('avatar')} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary">Button</button>
                </div>
                <p className="text-warning">{errors.apiError?.message}</p>
                <p style={{color:'white'}}>{errors.avatar?.message}</p>
            </div>
            
        </form>
    )

}

export default ChangeAvatarForm