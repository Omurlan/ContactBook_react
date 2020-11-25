import React, {useState} from 'react';
import './EditModal.css';


const EditModal = (props) => {
    
    let [editName, setEditName] = useState(props.editContact.name)
    let [editSurname, setEditSurname] = useState(props.editContact.surname)
    let [editNumber, setEditNumber] = useState(props.editContact.number)
    let [editContact] = useState(props.editContact)

    function setName(e) {
        let name = e.target.value
        setEditName(name)
    }

    function setSurname(e) {
        let surname = e.target.value
        setEditSurname(surname)
    }

    function setNumber(e) {
        let number = e.target.value
        setEditNumber(number)
    }

    function handleSave() {
        let newObj = {
            name: editName,
            surname: editSurname,
            number: editNumber,
            id: editContact.id,
            status: editContact.status
        }
        props.handleSaveContact(newObj)
    }

    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input
                    onChange={setName}
                    type="text"
                    value={editName}
                    className="inp-edit"
                />
                <input
                    onChange={setSurname}
                    type="text"
                    value={editSurname}
                    className="inp-edit"
                />
                <input
                    onChange={setNumber}
                    type="text"
                    value={editNumber}
                    className="inp-edit"   
                />
                <button onClick={handleSave}>Сохранить</button>
            </div>
        </div>
    );
};

export default EditModal;