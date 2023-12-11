// Import 
    // React 
    import { useForm, Controller } from "react-hook-form";
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";
    // React Select 
        import Select from 'react-select';
     
        // Import List 
        import ContryList from "../../Storage/ContryList";
        import ContinentsList from '../../Storage/Continents';
    
    import GetLocal from "../../Storage/GetLocal";
    import { useNavigate } from "react-router-dom";

    const schema = yup.object({
        name: yup
            .string()
            .min(5, 'Title must be at least 5 characters')
            .required('Title Need to be longer then 5 words'),
        description: yup 
            .string()
            .min(5, 'Description must be at least 5 characters')
            .required('Description Need to be longer then 5 words'),
        price: yup 
            .number()
            .min(1)
            .max(5000),
        maxGuests: yup 
            .number()
            .min(1)
            .max(100),
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
            .min(5, 'Description must be at least 5 characters')
            .required('Description Need to be longer then 5 words'),
        country: yup.object().shape({
            label: yup
                .string()
                .required('Description Need to be longer then 5 words'),
            value: yup
                .string()
                .required('You must select an country'),
        }),
        continents: yup.object().shape({
            label: yup
                .string()
                .required('Description Need to be longer then 5 words'),
            value: yup
                .string()
                .required('You must select an continents'),
        })
    })
// "You must select an country!"

function RegisterVenueForm () {
    const {accessToken} = GetLocal('userData')
    const {
        control, 
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
    });

    const navigate = useNavigate()

    
    

    const OnSubmit = async (data) =>  {
        console.log(data)
        console.log('click')
    }

    

    return (
        <form onSubmit={handleSubmit(OnSubmit)} className="text-white">
            <div className="mb-3">
                <div className="d-flex justify-content-between">
                    <h2>Register new Venue</h2>
                </div>
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
                <div className="row">
                    <div className="col">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number"  id="price" className="form-control" {...register('price')}/>
                        <p className='error'>{errors.price?.message}</p>
                    </div>
                    <div className="col">
                        <label htmlFor="maxGuests" className="form-label">Guest</label>
                        <input type="number"  id="maxGuests" className="form-control" {...register('maxGuests')}/>
                        <p className='error'>{errors.price?.message}</p>
                    </div>
                </div>
                <div className="mb-3">
                    <h5 style={{color: 'white'}}>
                        Image
                    </h5>
                    <label htmlFor="media"></label>
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
                            <input type="checkbox"  id="parking" className="custom-control-input" {...register('parking')}/>
                            <label htmlFor="parking">Parking </label>
                        </div>
                        <div className="w-100"></div>
                        <div className="col form-check">
                            <input type="checkbox"  id="breakfast" className="custom-control-input" {...register('breakfast')}/>
                            <label htmlFor="breakfast">Breakfast </label>
                        </div>
                        <div className="col form-check">
                            <input type="checkbox"  id="pets" className="custom-control-input" {...register('pets')}/>
                            <label htmlFor="pets">Pets </label>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <h5 style={{color: 'white'}}>
                        Location
                    </h5>
                    <div className="row">
                        <div className="col-1-2">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" name="address" id="adress" {...register('address')} />
                            <p className='error'>{errors.address?.message}</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" name="city" id="city" {...register('city')} />
                            <p className='error'>{errors.city?.message}</p>
                        </div>
                        <div className="col">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control" name="zip" id="zip" {...register('zip')} />
                            <p className='error'>{errors.zip?.message}</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col">
                            <Controller
                                name="continents"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                <Select
                                    placeholder='Select continents'
                                    name="continents"
                                    id="continents"
                                    {...field}
                                    options={ContinentsList}
                                    />    
                                    }
                                />
                            <p className='error'>{errors.continents?.message}</p>
                        </div>
                        <div className="col">
                            <Controller
                                name="country"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                    <Select
                                    name="country"
                                    placeholder='Select country'
                                    id="country"
                                    {...field}
                                    options={ContryList}
                                    />    
                                }
                            />
                            <p className='error'>{errors.country?.message}</p>
                        </div>
                        
                    </div>

                </div>


            
            </div>

            <button className="btn btn-primary">Update</button>
            
        </form>
    )

}

export default RegisterVenueForm

/**
 * <div className="mb-3">
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
                        <Controller
                        name="continents"
                        control={control}
                        defaultValue=""
                        render={({ field }) => 
                            <Select
                                placeholder='Select continents'
                                {...field}
                                options={ContinentsList}
                            />    
                        }
                    /> 
                        <p className='error'>{errors.city?.message}</p>
                    </div>
                    <div className="col">
                    <label htmlFor="country">Country</label>
                    <Controller
                        name="country"
                        control={control}
                        defaultValue=""
                        render={({ field }) => 
                            <Select
                                placeholder='Select country'
                                {...field}
                                options={ContryList}
                            />    
                        }
                    /> 
                
                        <p className='error'>{errors.city?.message}</p>
                    </div>
                </div>

            </div>
            <p className="text-warning">{errors.apiError?.message}</p>
 */

            /**
             * console.log(data)

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
            console.log(fetching)
            if(fetching.status === 200){
                navigate(`/venue/${receiveData.id}`)
            }
            console.log(receiveData.status)
        } catch (error) {
            console.log(error)
        }
*/

/**
 * const schema = yup.object({
    name: yup 
        .string()
        .min(5, 'Title must be at least 5 characters')
        .required('Title Need to be longer then 5 words'),

    description: yup 
        .string()
        .min(10, 'Description must be at least 10 characters')
        .required('Need to be'),
    price: yup
        .number()
        .min(1)
        .required('Need to be'),
    maxGuests: yup
        .number()
        .min(1)
        .max(100)
        .default(1)
        .required(''),
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
 */