

function Button ({ TypeOf, ClassOf ,OnClick ,children, DBToggel , DBTarget, AControls, AExpanded, ALabel}){
    return (<button type={TypeOf} className={ClassOf} onClick={OnClick} data-bs-toggle={DBToggel} data-bs-target={DBTarget} aria-controls={AControls} aria-expanded={AExpanded} aria-label={ALabel}> {children}</button>)
}

export default Button