import { useState } from "react";
import ModelBox from "../../Components/Reuse/ModelBox"
import RegisterVenueManger from "../../Components/Form/RegisterVenueManager";


function RegisterVenue () {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);

    return (
        <main className='container'>
            <div className="d-flex justify-content-center p-3">
                <div className="w-75">
                    <div>
                        <h2 style={{color: 'white'}}>Welcome to Holidaze</h2>
                        <p style={{color: 'white'}}>Are you a venue owner looking to showcase your space for events? Register your venue with us and join our vibrant community of event spaces. We make it easy for event organizers to discover and book venues that suit their needs. Follow the simple steps below to get started:</p>
                    </div>
                    <div style={{color: 'white'}}>
                        <h3 style={{color: 'white'}}>Benefits of Registering with Us:</h3>
                        <p>Increased Visibility: Showcase your venue to a broader audience.</p>
                        <p>Streamlined Booking: Receive booking requests directly through our platform</p>
                        <p>Networking Opportunities: Connect with event organizers seeking unique spaces</p>
                        <p>Ready to get started?</p>
                        <label htmlFor="venueButton"></label>
                        <button className="btn btn-primary" id="venueButton" onClick={() => setModalShow(true)}>
                            Become Venue Owner
                        </button>
                    </div>
                </div>
            </div>
                
            <ModelBox
                IsActive={modalShow}
                Title='Become Venue'
                Onhide={handleClose}
                >
                    <RegisterVenueManger/>
            </ModelBox>
                
        </main>
    )

}

export default RegisterVenue