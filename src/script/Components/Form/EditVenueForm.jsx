import { useState } from "react"
import Select from 'react-select';


// Import 
    // React 
    import { useForm, Controller } from "react-hook-form";
    import { format } from 'date-fns'
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";
        import GetLocal from "../../Storage/GetLocal";
        import ContryList from "../../Storage/ContryList";
        import ContinentsList from "../../Storage/Continents";

const schema = yup.object({
    name: yup
        .string()
        .required('You need to have'),
    description: yup
        .string()
        .required('You need to have'),
})



function ExitVenueForm ({ID, Item}) {
    const {name:Name, description:Description, media:Media,  meta, location, price:Price, maxGuests:MaxGuests, rating, id} = Item
    const {wifi:Wifi, parking:Parking, pets:Pets, breakfast:Breakfast} = meta
    const {address:Address, city:City,  continent:Continent, country:Country, zip:Zip} = location
    const {accessToken} = GetLocal('userData')
    
    const {
        getValues,
        setError,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm({
        defaultValues:{
            name:Name,
            description:Description,
            price:Price,
            maxGuests:MaxGuests, 
            media:Media, 
            wifi:Wifi,
            parking:Parking,
            breakfast:Breakfast,
            pets:Pets,
            address:Address,
            city:City,
            zip:Zip,
            continent:Continent,
            country:Country,
        }, 
        resolver: yupResolver(schema),
        criteriaMode: 'all',
    });
    const [changeHead, setChangeHead] = useState(false)
    const [changeTitle, setChangeTitle] = useState(false)
    const [changePrice, setChangePrice] = useState(false)
    const [changeGuest, setChangeGuest] = useState(false)
    const [changeDes, setChangeDes] = useState(false)
    const [changeImg, setChangeImg] = useState(false)
    const [changeFac, setChangeFac] = useState(false)
    const [changeLoc, setChangeLoc] = useState(false)

    const NewTitle = getValues('name')
    const NewDes = getValues('description')
    const NewPri = getValues('price')
    const NewGuest = getValues('maxGuests')
    
    const indexCT = ContinentsList?.findIndex((continent) => continent.value === Continent);
    const indexCY = ContryList.findIndex((continent) => continent.value === Country);
    

    

    const OnSubmit = async (data) => {
        console.log(data)

        const ContryORG =  JSON.stringify(data.country.value)
        const ContryORGFix = ContryORG?.replace(/"/g, '')
        
        const ContinentORG = JSON.stringify(data.continent.value)
        const ContinentORGFix = ContinentORG?.replace(/"/g, '')
        const obj =  {
            name:data.name,
            description:data.description,
            media:data.media,
            price:data.price,
            maxGuests: data.maxGuests,
            rating: rating, 
            meta: {
                wifi: data.wifi,
                parking: data.parking,
                breakfast: data.breakfast,
                pets: data.pets
            }, 
            location:{
                address: String(data.address),
                city: data.city,
                zip: data.zip, 
                country: ContryORGFix,
                continent: ContinentORGFix,
                'lat': 0,
                'lng': 0
            },

        }
        try {
            const fetching = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8', 
                    Authorization: `Bearer ${accessToken}`,
                },
                body:JSON.stringify(obj)
            })
            const receiveData = await fetching.json()
            if(fetching.status === 200) {
                setError('apiSuccess', { message: 'Update Info' });
            }
            
            if(fetching.status >= 400  && fetching.status < 450) {
                const {message:msg} = receiveData.errors[0]
                setError('apiError', {message: msg})
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <form onSubmit={handleSubmit(OnSubmit)} style={{color: 'white'}}>

            <div className="mb-3">
                <div className="d-flex justify-content-between">
                    <h3>Header</h3>
                    <p className="badge badge-pill badge-primary" onClick={() => setChangeHead(!changeHead)}>Change Header</p>
                </div>
                <div className="col">
                    <div className="col">
                        <div className={changeHead ? '' : 'd-none'}>
                            <div className="d-flex justify-content-between">
                                <p>{NewTitle}</p>
                                <p className="badge badge-pill badge-primary" onClick={() => setChangeTitle(!changeTitle)}>Change Title</p>
                            </div>
                            <div className={changeTitle ? '' : 'd-none'}>
                                <label htmlFor="name" className="form-label">Title</label>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} className="form-control" style={{backgroundColor:'white'}} />}
                                />
                                <p className="text-warning">{errors.name?.message}</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="col">
                        <div className={changeHead ? '' : 'd-none'}>
                            <div className="d-flex justify-content-between">
                                <p >{NewDes}</p>
                                <p className="badge badge-pill badge-primary" onClick={() => setChangeDes(!changeDes)}>Change Description</p>
                            </div>
                            <div className={changeDes ? '' : 'd-none'}>
                                <label htmlFor="description" className="form-label">description</label>
                                <Controller
                                name="description"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} className="form-control" style={{backgroundColor:'white'}} />}
                                />
                                <p className="text-warning">{errors.description?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={changeHead ? '' : 'd-none'}>
                            <div className="d-flex justify-content-between">
                                <p >Price {NewPri}</p>
                                <p className="badge badge-pill badge-primary" onClick={() => setChangePrice(!changePrice)}>Change Price</p>
                            </div>
                            <div className={changePrice ? '' : 'd-none'}>
                                <label htmlFor="price" className="form-label">Price</label>
                                <Controller
                                name="price"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} className="form-control" style={{backgroundColor:'white'}} />}
                                />
                                <p className="text-warning">{errors.price?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={changeHead ? '' : 'd-none'}>
                            <div className="d-flex justify-content-between">
                                <p >Guest {NewGuest}</p>
                                <p className="badge badge-pill badge-primary" onClick={() => setChangeGuest(!changeGuest)}>Change Price</p>
                            </div>
                        </div>
                        <div className={changeGuest ? '' : 'd-none'}>
                            <label htmlFor="maxGuests" className="form-label">maxGuests</label>
                                <Controller
                                name="maxGuests"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} className="form-control" style={{backgroundColor:'white'}} />}
                                />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="mb-3">
                    <div className="d-flex justify-content-between">
                        <h3>Image</h3>
                        <p className="badge badge-pill badge-primary" onClick={() => setChangeImg(!changeImg)}>Change Image</p>
                    </div>
                    <div className={changeImg ? '' : 'd-none'}>
                        <label htmlFor="media" className="form-label">Image</label>
                       <Controller
                        name="media"
                        control={control} 
                        defaultValue=""
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
                <div className="d-flex justify-content-between">
                    <h3>Facilities</h3>
                    <p className="badge badge-pill badge-primary" onClick={() => setChangeFac(!changeFac)}>Change Facilities</p>
                </div>
                <div className={changeFac ? '' : 'd-none'}>
                    <div className="row">
                        <div className="col form-check">
                            <Controller
                                name="wifi"
                                control={control}
                                defaultValue=''
                                render={({ field }) => <input type='checkbox' className="custom-control-input" {...field} style={{backgroundColor:'white'}} />}
                            />
                        <label htmlFor="wifi">Wifi</label>
                        </div>
                        <div className="col form-check">
                            <Controller
                                name="parking"
                                control={control}
                                defaultValue=''
                                render={({ field }) => <input type='checkbox' className="custom-control-input" {...field} style={{backgroundColor:'white'}} />}
                            />
                            <label htmlFor="parking">Parking</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-check">
                            <Controller
                                name="breakfast"
                                control={control}
                                defaultValue=''
                                render={({ field }) => <input type='checkbox' className="custom-control-input" {...field} style={{backgroundColor:'white'}} />}
                            />
                            <label htmlFor="breakfast">Parking</label>
                        </div>
                        <div className="col form-check">
                            <Controller
                                name="pets"
                                control={control}
                                defaultValue=''
                                render={({ field }) => <input type='checkbox' id="pets" className="custom-control-input" {...field} style={{backgroundColor:'white'}} />}
                            />
                            <label htmlFor="pets">Parking</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="d-flex justify-content-between">
                    <h3>Location</h3>
                    <p className="badge badge-pill badge-primary" onClick={() => setChangeLoc(!changeLoc)}>Change Location</p>
                </div>
                <div className={changeLoc ? '' : 'd-none'}>
                    <div className="row">
                        
                        <div className="col-12">
                            <label htmlFor="address">Address</label>
                            <Controller
                                name="address"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} id="address" className="form-control" style={{backgroundColor:'white'}} />}
                                />
                        
                            <p className='error'>{errors.address?.message}</p>
                        </div>
                        <div className="col">
                            <label htmlFor="city">City</label>
                            <Controller
                                name="city"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} id="city" className="form-control" style={{backgroundColor:'white'}} />}
                                />
                            <p className='error'>{errors.city?.message}</p>
                        </div>
                        <div className="col">
                            <label htmlFor="zip">Zip</label>
                            <Controller
                                name="zip"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} id="zip" className="form-control" style={{backgroundColor:'white'}} />}
                            />
                            <p className='error'>{errors.zip?.message}</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col">
                            <label htmlFor="continent">Continent</label>
                            <Controller
                                name="continent"
                                control={control}
                                defaultValue=''
                                render={({ field}) => 
                                    <Select

                                        placeholder={ContinentsList[indexCT]?.value}
                                        {...field}
                                        options={ContinentsList}
                                        
                                    />   
                                    
                                }
                            />        
                        </div>
                        <div className="col">
                            <label htmlFor="country">Country</label>
                            <Controller
                                name="country"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                <Select

                                        placeholder={ContryList[indexCY].value}
                                        {...field}
                                        options={ContryList}
                                        
                                    />    
                                }
                            /> 
                        </div>       
                    </div>   
                </div>
            </div>
            <p className="text-warning">{errors.apiError?.message}</p>
            <p className="text-success">{errors.apiSuccess?.message}</p>
            <button className="btn btn-primary">Update</button>
        </form>
    )
}



export default ExitVenueForm

