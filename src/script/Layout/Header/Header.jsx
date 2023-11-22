
import imageBG from '../../../assets/Image/holidaze-bg-1.jpg'
import RequesteAPI from '../../Components/API/RequestAPI'
import ErrorMSG from '../../Components/Error/ErrorMSG'
import LoadingScreen from '../../Components/Loading/LoadingScreen'

function Header () {
    const {data, isLoading, isError} = RequesteAPI()

    function HandleChange(event){
        const inputSearch = event.target.value 
        console.log(inputSearch)
    }


    if(isLoading) return <LoadingScreen />
    if(isError) return <ErrorMSG />
    else {
        return (
            <header className='container ' style={{backgroundImage: `URL(${imageBG})`, backgroundPosition:'bottom', backgroundSize:'cover', height:'250px', marginTop:'80px'}}>
                <div className='row'>
                    <form className='col-md-6 py-2'>
                        <div className='input-group'>
                            <div className='form-outline'>
                                <input type="search" className='form-control' placeholder='City, Zip Code' onChange={(event) => HandleChange(event)} />
                                <label htmlFor="search">Search</label>
                            </div>
                            <button className='btn btn-outline-primary'>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </header>
        )
    }
    
}

export default Header 