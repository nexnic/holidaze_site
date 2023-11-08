import { Link } from "react-router-dom"

function TempletbrandName () {
    return (
        <Link to='/' className='link-unstyled'>
            <h1 className="navbar-brand">
                    <span style={{ color: '#FFFFFF' }}>Holi</span>
                    <span style={{ color: '#FC7D14' }}>daze</span>
            </h1>
        </Link>
    )
}

export default TempletbrandName