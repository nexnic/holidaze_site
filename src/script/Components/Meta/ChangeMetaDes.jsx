/**
 * @name ChangeMetaDes
 * @function meta:desc
 * @param {string} description 
 */
function ChangeMetaDes(description){
    document.querySelector('meta[name="description"]').setAttribute("content", description)
}

export default ChangeMetaDes