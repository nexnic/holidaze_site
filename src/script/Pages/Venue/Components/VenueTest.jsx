import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Modaltest ({IsActive, Title, handleClose ,children}) {

    return (
        <Modal 
        show={IsActive}
        size="lg"
        aria-labelledby="test"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3 style={{color: 'white',}}>{Title}</h3>
                    <Button variant="primary" onClick={handleClose}>
                    <i className="fa-solid fa-xmark"></i>
                    </Button>
                </Modal.Title>
                
            </Modal.Header>
            <Modal.Body>
                    {children}
            </Modal.Body>
        </Modal>
    )
}

export default Modaltest