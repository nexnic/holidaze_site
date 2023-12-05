function ChangeHead (meta) {
    const {title, description, keywords} = meta
    ChangeTitle(title)
    ChangeMetaDes(description)
    ChangeMetakey(keywords)
}

export default ChangeHead

function ChangeTitle (title) {
    document.title = title
}

function ChangeMetaDes (description) {
    document.querySelector('meta[name="description"]').setAttribute("content", description)
}

function ChangeMetakey(keywords) {
    document.querySelector('meta[name="keywords"]').setAttribute("content", keywords)
}