
/**
 *  Templetmain for nav
 * @param {*} param0 
 * @returns 
 */

function TempletMain ({ children }) {
    
    return (
        <nav className="navbar navbar-expand-lg bg-black pl-3 pr-3">
            <div className="container-fluid">   
                {children}
            </div>
        </nav>
    )
}

export default TempletMain