// Import 
    // React 
    import { useForm, Controller } from "react-hook-form";
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";
import ContryList from "../../Storage/ContryList";
import ContinentsList from '../../Storage/Continents';
import { useState } from "react";
import GetLocal from "../../Storage/GetLocal";

const schema = yup.object({
    name: yup
        .string()
        .required('You need to have'),
    description: yup 
        .string()
        .required('Need to be'),
    price: yup
        .string()
        .required('Need to be'),
    maxGuests: yup
        .string()
        .min(1)
        .max(100)
        .default(1)
        .required('Need to be'),
    wifi: yup
        .boolean()
        .required(), 
    parking: yup
        .boolean()
        .required(),
    breakfast: yup
        .boolean()
        .required(),
    pets: yup
        .boolean()
        .required(),
    address: yup 
        .string()
        .required('Need to be'),
    city: yup 
        .string()
        .required('Need to be'),
    zip: yup 
        .string()
        .required('Need to be'),
    contients: yup
        .string()
        .notOneOf([""], "You must select an contients!"),
    country: yup
        .string()
        .notOneOf([""], "You must select an country!"),
    

})


function RegisterVenueForm () {
    const {accessToken} = GetLocal('userData')
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

    const [urlImage, setUrlImage] = useState([])
    const [selectedContry, setSelectedContry] = useState('Contry');
    const ListOfContry = ContryList
    
    const handleSelectChange = (e) => {
        setSelectedContry(e.target.value);
      };

    const OnSubmit = async (data) =>  {

        const obj = {
            name: data.name,
            description: data.description,
            media: data.media,
            price: Number(data.price),
            maxGuests: Number(data.maxGuests),
            rating: 0, 
            meta: {
                wifi: data.wifi,
                parking: data.parking,
                breakfast: data.breakfast,
                pets: data.pets
            },
            location:{
                address: data.address,
                city: data.city,
                zip: data.zip,
                country: data.contry,
                continent: data.contients,
                lat: 0,
                lng: 0, 
            }
        }
        console.log(obj)
        try {
            const fetching = await fetch('https://api.noroff.dev/api/v1/holidaze/venues', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8', 
                    Authorization: `Bearer ${accessToken}`,
                },
                body:JSON.stringify(obj)
            })
            const receiveData = await fetching.json()
            console.log(receiveData)
        } catch (error) {
            console.log(error)
        }

    }

    

    return (
        <form onSubmit={handleSubmit(OnSubmit)} className="text-white">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Title</label>
                <input type='name' id="name" className="form-control" {...register('name')}/>
                <p className='error'>{errors.name?.message}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" id="description" className="form-control" {...register('description')} />
                <p className='error'>{errors.description?.message}</p>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <label htmlFor="price">Price</label>
                        <input type="number"  id="price" className="form-control" {...register('price')}/>
                        <p className='error'>{errors.price?.message}</p>
                    </div>
                    <div className="col">
                        <label htmlFor="maxGuests">Max guests</label>
                        <input type="number"  id="maxGuests" className="form-control" {...register('maxGuests')}/>
                        <p className='error'>{errors.maxGuests?.message}</p>
                    </div>
                </div>
            </div>
            <div className="mb-3">
            <h5 style={{color: 'white'}}>
                    Image
                </h5>
                <div className="row">
                    <div>
                        <label htmlFor="urlmedia"></label>
                        <Controller
                            name="media"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                            <>
                                {field.value.map((url, index) => (
                                <div key={index}>
                                    <input
                                        type='url'
                                        {...field}
                                        value={url}
                                        onChange={(e) => {
                                            const newUrls = [...field.value];
                                            newUrls[index] = e.target.value;
                                            field.onChange(newUrls);
                                        }}
                        />
                  <button type="button" className="btn btn-primary" onClick={() => field.onChange([...field.value.slice(0, index), ...field.value.slice(index + 1)])}>Remove</button>
                </div>
              ))}
              <button type="button" className="btn btn-primary"onClick={() => field.onChange([...field.value, ''])}>Add Image URL</button>
            </>
          )}
        />
                    </div>
                    

                </div>

            </div>
            <div className="mb-3">
                <h5 style={{color: 'white'}}>
                    Facilities
                </h5>
                <div className="row">
                    <div className="col form-check">
                        
                        <input type="checkbox"  id="wifi" className="custom-control-input" {...register('wifi')}/>
                        <label htmlFor="wifi">Wifi </label>
                    </div>
                    <div className="col form-check">
                        
                        <input type="checkbox"  id="parking" className="custom-control-input"  {...register('parking')}/>
                        <label htmlFor="parking">Parking </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col form-check">
                        <input type="checkbox"  id="breakfast" className="custom-control-input" {...register('breakfast')}/>
                        <label htmlFor="breakfast">breakfast </label>
                    </div>
                    <div className="col form-check">
                        <input type="checkbox"  id="pets" className="custom-control-input" {...register('pets')}/>
                        <label htmlFor="pets">breakfast</label>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <h5 style={{color: 'white'}}>
                    Location
                </h5>
                <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" name="address" id="adress" {...register('address')} />
                    <p className='error'>{errors.address?.message}</p>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control"  name="city" id="city" {...register('city')}/>
                            <p className='error'>{errors.city?.message}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control"  name="zip" id="zip" {...register('zip')}/>
                            <p className='error'>{errors.zip?.message}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col">
                        <label htmlFor="continents">Continents</label>
                        <select name="Continents" id="Continents" className="form-select" {...register('contients')}>
                            {ContinentsList.map((e) => <option value={e} key={e}>{e}</option>)}
                        </select>
                        <p className='error'>{errors.city?.message}</p>
                    </div>
                    <div className="col">
                        <label htmlFor="country">Country</label>
                        <select name="country" id="contry" className="form-select" {...register('contry')}>
                            {ContryList.map((e) => <option value={e} key={e}>{e}</option>)}
                        </select>
                        <p className='error'>{errors.city?.message}</p>
                    </div>
                </div>

            </div>
            <p className="text-warning">{errors.apiError?.message}</p>
            <button className="btn btn-primary">Submit</button>
        </form>
    )

}

export default RegisterVenueForm