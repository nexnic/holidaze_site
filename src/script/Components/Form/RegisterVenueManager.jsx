// Import 
    // React 
    import { useForm, Controller } from "react-hook-form";
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";

        import GetLocal from "../../Storage/GetLocal";

const schema = yup.object({
    venueManager: yup
        .boolean()
        .required(),
})

function RegisterVenueManger () {
    const {accessToken,name} = GetLocal('userData')
    const {
        control, 
        register,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
    });

    const OnSubmit = async (data) =>  {

        try {
            const fetching = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${name}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8', 
                    Authorization: `Bearer ${accessToken}`,
                },
                body:JSON.stringify(data)
            })
            const receiveData = await fetching.json()
            console.log(receiveData)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form onSubmit={handleSubmit(OnSubmit)} className="text-white">
            <p style={{color: 'white'}}>
            Once you've submitted your venue details, our team will review the information to ensure accuracy and completeness. You'll receive a confirmation once your venue is approved and live on our platform.
            </p>
            <div className="form-check form-switch">
                <input type="checkbox"  id="venueManager" className="form-check-input" {...register('venueManager')}/>
                <label htmlFor="venueManager" className="form-label" >Register As Venue</label>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default RegisterVenueManger