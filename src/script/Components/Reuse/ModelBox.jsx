import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModelBox ({IsActive, Title,Onhide ,children}) {
    return (
        <Modal 
        show={IsActive}
        size="lg"
        aria-labelledby="test"
        onHide={Onhide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3 style={{color: 'white',}}>{Title}</h3>
                </Modal.Title>
                
            </Modal.Header>
            <Modal.Body>
                    {children}
            </Modal.Body>
        </Modal>
    )
}

export default ModelBox