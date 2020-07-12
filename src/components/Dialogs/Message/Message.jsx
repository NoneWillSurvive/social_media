import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return (
        <div className={`${s.message} ${s.my__message}`}>
            <img className={s.message__avatar}
                 src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt=""/>
            <div className={s.message__text}>
                {props.message}
                <div className={s.timing}>{today}</div>
            </div>
        </div>
    )
}

export default Message;
