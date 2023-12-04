import RegisterVenueForm from "../../Components/Form/RegisterVenueForm"

function RegisterVenue () {


    return (
        <main className='container'>
            <div className="d-flex justify-content-center p-3">
                <div className="w-75">
                    <div>
                        <h2 style={{color: 'white'}}>Welcome to Holidaze</h2>
                        <p style={{color: 'white'}}>Are you a venue owner looking to showcase your space for events? Register your venue with us and join our vibrant community of event spaces. We make it easy for event organizers to discover and book venues that suit their needs. Follow the simple steps below to get started:</p>
                    </div>
                    <RegisterVenueForm/>
                </div>
            </div>
        </main>
    )

}

export default RegisterVenue