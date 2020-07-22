import React from 'react';
import s from './Dialogs.module.css';
import People from "./People/People";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let peoplesElements = props.peoples.map(element => <People name={element.name} id={element.id}/>);
    let messagesElements = props.messages.map(element => <Message message={element.message}/>);


    let addMessage = () => {
        props.addMessage();
    }

    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.updateDialogsMessage(text);
    }

    return (
        <div className={s.container}>
            <h3 className={s.header}>dialogs</h3>
            <div className={s.content}>
                <div className={s.peoples}>
                    <ul>
                        {peoplesElements}
                    </ul>
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div className={s.content__newMessage}>
                        <textarea onChange={onChangeMessage} name="newMessage" cols="30" rows="10"
                                  value={props.newDialogsText}/>
                    <button onClick={addMessage} className={s.content__sendMessage}>Отправить</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;
