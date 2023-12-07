/**
 * @name ChangeMetaKey
 * @function meta:keyword
 * @param {string} keywords 
 */

function ChangeMetaKey (keywords) {
    document.querySelector('meta[name="keywords"]').setAttribute("content", keywords)
}

export default ChangeMetaKey