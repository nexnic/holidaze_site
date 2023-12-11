function ProfileUserInfo ({userName, userEmail, venueManager}) {
    console.log(venueManager)
    return (
        <div className='container'>
            <div className="text-center p-3">
                <h2 style={{color: 'white'}}>{userName}</h2>
                {venueManager ? <h3 style={{color: 'white'}}>Venue manager</h3> : null}
                <h4 style={{color: 'white'}}>{userEmail}</h4>
            </div>
        </div>
    )
}

export default ProfileUserInfo