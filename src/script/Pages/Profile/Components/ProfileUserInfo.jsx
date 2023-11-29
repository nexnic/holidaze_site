function ProfileUserInfo ({userName, userEmail}) {

    return (
        <div className='container'>
            <div className="text-center p-3">
                <h2 style={{color: 'white'}}>{userName}</h2>
                <h4 style={{color: 'white'}}>{userEmail}</h4>
            </div>
        </div>
    )
}

export default ProfileUserInfo