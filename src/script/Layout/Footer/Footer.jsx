import { Link } from "react-router-dom"

function Footer () {
    return (
        <footer className='fixed-bottom bg-black p-3'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <h3>
                            <span style={{color: '#FFFFFF'}}>Holi</span>
                            <span style={{color: '#FC7D14'}}>daze</span>
                        </h3>
                        <p style={{color: '#FFFFFF'}}>
                            Your Gateway to Unforgettable Getaways
                        </p>
                    </div>
                    <div className='col'>
                        <ul className='list-group'>
                            <li>
                                <h5 style={{color: '#FFFFFF'}}>Our Company</h5>
                            </li>
                            <li>
                                <Link  to='/' className='link-unstyled'>Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='row'>
                        <div className='col'>
                        <hr className='hr'  style={{color: '#FFFFFF'}}/>
                            <p style={{color: '#FFFFFF'}}>© 2023 by Kent Erik All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer