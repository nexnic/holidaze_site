// Import 
    // React 
    import { useForm} from "react-hook-form";
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";

        import GetLocal from "../../Storage/GetLocal";

const schema = yup.object({
    Removevenue: yup
        .boolean()
        .required(),
})

function RemoveVenueform ({ID}) {
    console.log(ID)
    const {accessToken} = GetLocal('userData')
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
    });

    const OnSubmit = async (data) =>  {
        console.log(data)

        try {
            const fetching = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${ID}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8',
                    Authorization: `Bearer ${accessToken}`,
                }
            })
            
            if(fetching.status === 200) {
                setError('apiSuccess', { message: 'This is to inform you that the venue removal process for has been successfully completed. As per your request, the venue is no longer listed on our platform.' });
            }
            if(fetching.status > 400 && fetching.status < 500) {
                const receiveData = await fetching.json()
                const {message:msg} = receiveData.errors[0]
                setError('apiError', { message: msg });
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
            <p style={{color: 'white'}}>
            Removing a venue from our platform is a significant action that may impact users and attendees. Before proceeding, consider the potential consequences, such as missed opportunities and negative user experiences. Ensure that the decision aligns with your business strategy.
            </p>
            <div className="form-check form-switch">
                <input type="checkbox"  id="Removevenue" className="form-check-input" {...register('Removevenue')}/>
                <label htmlFor="Removevenue" className="form-label" style={{color: 'white'}}>Register As Venue</label>
            </div>
            <p className="text-success">{errors.apiError?.message}</p>
            <p className="text-warning">{errors.apiSuccess?.message}</p>
            <button className="btn btn-primary">Submit</button>
        </form>
    )

}

export default RemoveVenueform 