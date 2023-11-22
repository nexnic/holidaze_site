
/**
 *  Templetmain for nav
 * @param {*} param0 
 * @returns 
 */

function TempletMain ({ children }) {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black pl-3 pr-3 fixed-top">
            <div className="container-fluid">   
                {children}
            </div>
        </nav>
    )
}

export default TempletMain