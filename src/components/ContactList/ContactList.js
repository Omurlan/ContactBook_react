import React from 'react';

const ContactList = (props) => {
    let style = {
        listStyleType: 'none'
    }

    return (
        <ul style={style}>
            {props.contacts.map((item, index) => (

                <li key={item.id} className={item.status ? 'completed': ''}>
                    <input onChange ={() => props.changeStatus(item.id)} type="checkbox"/>
                    {item.name} {item.surname} {item.number} 
                    <button onClick={() => props.handleDelete(item.id)}>Удалить</button> 
                    <button onClick={() => props.handleEdit(index)}>Изменить</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;