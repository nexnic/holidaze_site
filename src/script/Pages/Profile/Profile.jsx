import { useParams} from 'react-router-dom';
import GetLocal from '../../Storage/GetLocal';
import RequestAPIAuth from '../../Components/API/Auth/RequestAPIAuth';
import ProfileImage from './Components/ProfileImage';
import ProfileUserInfo from './Components/ProfileUserInfo';


function Profile (){
    const {userID} = useParams()
    const UserData = GetLocal('userData')
    const {accessToken} = UserData
    const {data, isLoading, isError} = RequestAPIAuth(userID, accessToken)
    if(isLoading) return<div>loading</div>
    if(isError) return <div>Error</div>
    else {
        return (
            <main>
                <ProfileImage avatar={data.avatar} userName={data.name}/>
                <ProfileUserInfo userName={data.name} userEmail={data.email}/>
            </main>
        )
    }
}

export default Profile