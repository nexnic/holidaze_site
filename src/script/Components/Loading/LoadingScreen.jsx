function LoadingScreen () {
    return (
        <div className="d-flex  justify-content-center align-items-center" style={{minHeight: '50vh'}}>
                <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                    
                    <div className='spinner-grow' role='status'>
                        <span className='sr-only'> Loading...</span>
                    </div>
                    <h1 style={{color: 'white'}}>Loading API</h1>
                </div>
                
        </div>
    )
}

export default LoadingScreen 