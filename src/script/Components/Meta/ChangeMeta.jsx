// Import 
    // Meta Folder
        import ChangeTitle from "./ChangeTitle"
        import ChangeMetaDes from "./ChangeMetaDes"
        import ChangeMetaKey from "./ChangeMetaKey"


/**
 * @name ChangeMetaTag
 * @param {object} obj 
 */
function ChangeMetaTag(obj) {
    
    const {Title, description, keywords} = obj
    
    ChangeTitle(Title)
    ChangeMetaDes(description)
    ChangeMetaKey(keywords)
}

export default ChangeMetaTag