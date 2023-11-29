import { useParams} from 'react-router-dom';
import GetLocal from '../../Storage/GetLocal';
import RequestAPIAuth from '../../Components/API/Auth/RequestAPIAuth';
import ProfileImage from './Components/ProfileImage';
import ProfileUserInfo from './Components/ProfileUserInfo';


function Profile (){
    const {userID} = useParams()
    const UserData = GetLocal('userData')
    const {accessToken, avatar, name, email} = UserData
    const {data, isLoading, isError} = RequestAPIAuth(userID, accessToken)
    if(isLoading) return<div>loading</div>
    if(isError) return <div>Error</div>
    else {
        return (
            <main>
                <ProfileImage avatar={avatar} userName={name}/>
                <ProfileUserInfo userName={name} userEmail={email}/>
            </main>
        )
    }
}

export default Profile