/**
 * IsLogin 
 * This will check is user is login 
 * @returns true or false 
 */

function IsLogin () {
    const token  = localStorage.getItem('userData')

    if(token) return true 
    if(!token) return false 
}

export default IsLogin