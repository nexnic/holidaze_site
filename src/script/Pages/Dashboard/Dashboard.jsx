
import { Link } from "react-router-dom"
import RequestVenueAuth from "../../Components/API/Auth/RequestVenueAuth"
import GetLocal from "../../Storage/GetLocal"
import DashboardVenueList from "./Components/DashboardVenueList"

function Dashboard() {
    
    const {name, accessToken} = GetLocal('userData')
    const {data, isLoading, isError} = RequestVenueAuth(name, accessToken)
    if(isLoading) return<div>loading</div>
    if(isError) return <div>Error</div>
    else {
        

        if(data?.length === 0) {
            return (
                <main>
                    <section className='d-flex p-2  flex-column align-items-center gap-3'>
                        <div className="w-75">
                        <h2 style={{color:'white'}}>Dashboard</h2>
                        <p style={{color: 'white'}}>
                            Are you a venue owner looking to showcase your space for events? Register your venue with us and join our vibrant community of event spaces. We make it easy for event organizers to discover and book venues that suit their needs. Follow the simple steps below to get started
                        </p>
                        <h3 style={{color: 'white'}}>
                            Step 1 
                        </h3>
                        <p style={{color: 'white'}}>
                            Provide comprehensive details about your venue. Include the address, capacity, facilities, and any special features that set your space apart. Upload high-quality images to give potential clients a visual sense of what your venue has to offer.
                        </p>
                        <h3 style={{color: 'white'}}>
                            Confirmation
                        </h3>
                        <p style={{color: 'white'}}>
                            Once you've submitted your venue details, our team will review the information to ensure accuracy and completeness. You'll receive a confirmation once your venue is approved and live on our platform.
                        </p>
                        <Link to='/dashboard/register/venue' className='btn btn-primary'>Register Venue</Link>
                        </div>
                    </section>
                </main>
            )
        }
        else{
            console.log(data)
            return (
                <main className="container">
                   <div className="d-flex justify-content-center p-3">
                        <div className="w-75">
                            <div>
                                <h2 style={{color:'white'}}>Dashboard</h2>
                            </div>

                            <div className="col">
                                <div className="list-group">
                                    {
                                        data.map((items) => <DashboardVenueList item={items} key={items.id} />)
                                    }
                                </div>
                                <Link to='/dashboard/register/venue' className='btn btn-primary'>Register Venue</Link>
                            </div>  
                        </div>
                   </div>
                </main>
            )
        }
    }
    
}

export default Dashboard