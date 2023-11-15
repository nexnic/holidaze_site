function ProfileImage ({avatar, userName}) {
    console.log(avatar, userName)

    return (

        <div>
            <div className="d-flex justify-content-center mb-4">
                <img id="selectedAvatar" src="https://source.unsplash.com/random/150x150?person"
                className="rounded-circle" style={{width: '200px', height: '200px', }} alt="example placeholder"/>
            </div>
            <div className="d-flex justify-content-center">
                <div className="btn btn-primary btn-rounded">
                    <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                    <input type="file" className="form-control d-none" id="customFile2" />
                </div>
            </div>
        </div>
        
    )

}

export default ProfileImage