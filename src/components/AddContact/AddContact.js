import React, {useState} from 'react';

const AddContact = (props) => {
    let [name, setName] = useState('')
    let [surname, setSurname] = useState('')
    let [number, setNumber] = useState('')

    function handleValue1(e) {
        setName(e.target.value)
    };

    function handleValue2(e) {
        setSurname(e.target.value)
    };

    function handleValue3(e) {
        setNumber(e.target.value)
    };

    function handleClick() {
        let newObj = {
            name: name,
            surname: surname,
            number: number,
            id: Date.now(),
            status: false
        }
        props.handleContact(newObj)
        setName('')
        setSurname('')
        setNumber('')
    };

    return (
        <div>
            <h3>Контактная книжка</h3>
            <input placeholder="Имя" value={name} onChange={handleValue1} type="text"/>
            <input placeholder="Фамилия" value={surname} onChange={handleValue2} type="text"/>
            <input placeholder="Номер телефона" value={number} onChange={handleValue3} type="text"/>
            <button onClick={handleClick}>Добавить контакт</button>
        </div>
    );
};

export default AddContact;