function GetLocal (key){
    return JSON.parse(localStorage.getItem(key))
}
export default GetLocal