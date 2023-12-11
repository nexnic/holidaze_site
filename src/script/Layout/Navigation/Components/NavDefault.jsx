function NavDefault () {
    return (
        <>
                    <nav className="navbar navbar-expand-lg bg-black navbar-darkbg-body-black">
                        <div className="container-fluid justify-content-between">
                            <div className="d-flex">
        
                                <Link to='/' className="navbar-brand me-2 mb-1 d-flex align-items-center">
                                    <h2>
                                        <span style={{color:'white'}}>
                                            Holi
                                        </span>
                                        <span style={{color:'#FC7D14'}}>
                                            daze
                                        </span>
                                    </h2>
                                </Link>
        
                                <form className="input-group w-auto my-auto d-none d-sm-flex">
                                    <input
                                    type="search"
                                    className="form-control rounded"
                                    placeholder="Search"
                                    style={{minWidth: '125px'}}
                                    />
                                    <span className="input-group-text border-0 d-none d-lg-flex"
                                    ><i className="fas fa-search"></i
                                    ></span>
                                </form>
                            </div> 
                            <Button ClassOf={'navbar-toggler'} TypeOf={'button'}  DBToggel={'collapse'} DBTarget={'#navbarLinkmenu'} AControls={'navbarLinkmenu'} AExpanded={'false'} ALabel={'Toggle navigation'} >
                                        <span style={{color: 'white'}} className="navbar-toggler-icon"></span>
                            </Button>
                        </div>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-darkbg-body-black bg-black">
                        <div className="container-fluid">
                            <div className="collapse  navbar-collapse" id="navbarLinkmenu">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link text-white" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/product' className='nav-link text-white'>Rent</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/register' className='nav-link text-white'>Register User</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-white" onClick={HandlerOpenLogin}>Login</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {isOpenLogin ? <LoginForm  /> : ''}
                    </nav>
                    
                </>
    )
}