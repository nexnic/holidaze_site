import { useState } from "react"
import ModelBox from "../../../Components/Reuse/ModelBox"
import RemoveVenueform from "../../../Components/Form/RemoveVenueform";
import ExitVenueForm from "../../../Components/Form/EditVenueForm";

function DashboardVenueList ({item}) {
    const {id, name , description} = item
    const [modalShow, setModalShow] = useState(false);
    const [modalRemove, setModalRemove] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const handleMenu = () => setModalShow(!modalShow)
    
    

    function handleClickRemove(id) {
        setModalShow(!modalShow)
        setModalEdit(false)
        setModalRemove(true)
    }

    function handleClickEdit(id) {
        setModalShow(!modalShow)
        setModalRemove(false)
        setModalEdit(true)
    }

    return (
        <div className="list-group-item list-group-item-action active mb-3" id={id} >
            <div className="d-flex w-100 justify-content-between" style={{color: 'white'}}>
                <h5 className="mb-1">{name}</h5>
                <small>3 days ago</small>
            </div>
            <div className="d-flex justify-content-evenly pt-3">
                <button className="btn btn-secondary btn-sm" onClick={() => handleClickRemove(id)}>Remove</button>
                <button className="btn btn-secondary btn-sm" onClick={() => handleClickEdit(id)}>edit</button>
            </div>
            <ModelBox
                IsActive={modalShow}
                Title={name} 
                Onhide={handleMenu}
            >
                {modalRemove ?  <RemoveVenueform ID={id}/> : null}
                {modalEdit ? <ExitVenueForm ID={id} Item={item}/> : null }

            </ModelBox>
            
        </div>

        
        
    )
}

export default DashboardVenueList
