// Import 
    import { useForm} from "react-hook-form";
    import { yupResolver } from "@hookform/resolvers/yup";
    import * as yup from "yup";
import GetLocal from "../../Storage/GetLocal";


    const schema = yup.object({
        cancellation: yup
        .boolean()
        .oneOf([true], 'Confirm to cancel')
        .required(),
    })

function RemovingBookingForm ({ID}) {
    const {accessToken} = GetLocal('userData')

    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
    });

    const OnSubmit = async (data) => {
        try {
            const fetching  = await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${ID}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
            console.log(fetching.status)
            if(fetching.status === 204) {
                setError('apiSuccess', { message: 'The Booking is canseled' });
            }
            if(fetching.status >= 400  && fetching.status < 450){
                setError('apiError', 'Error pleas try later')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
            <p style={{color: 'white'}}>
                Cancelling your booking may result in a cancellation fee. Please review our cancellation policy before proceeding. Are you sure you want to cancel your booking?
            </p>
            <div className="form-check form-switch">
                <input type="checkbox" id="cancellation" className="form-check-input"  {...register('cancellation')}/>
                <label htmlFor="cancellation" className="form-label">Confirm </label>
                <p style={{color: 'white'}}>{errors.cancellation?.message}</p>
            </div>
            <p className="text-warning">{errors.apiError?.message}</p>
            <p className="text-success">{errors.apiSuccess?.message}</p>
            <button className="btn btn-primary">Cancelling</button>
        </form>
    )

}

export default RemovingBookingForm