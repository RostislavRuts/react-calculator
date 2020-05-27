import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
/* 
    *  DialogItem и Message - компонент созданный прямо в этом файле*/
const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className={s.dialog}>
            {props.message}
        </div>
    );
}
const Dialogs = (props) => {
    
    let dialogsData = [
        {id: 1, name: 'Den'},
        {id: 2, name: 'Nata'},
        {id: 3, name: 'Van'},
        {id: 4, name: 'Sveta'},
    ];

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/* атрибуты компонента передаются как свойства объекта props */}
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name="Nata" id="2"/>
                <DialogItem name="Van" id="3"/>
            </div>

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it"/>
                <Message message="React crash course"/>
            </div>
        </div>
    );
    
}

export default Dialogs;