import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateMode = () => {
        setEditMode(true);
    };

    let deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    };

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div className={s.status}>
            {editMode ?
                <div>
                    <input type="text" name="" id=""
                           value={status}
                           autoFocus={true}
                           onBlur={deactivateMode}
                           onChange={onChangeStatus}

                    />
                </div> :
                <div>
                    <span onDoubleClick={activateMode}>{status || "No status"}</span>
                </div>
            }
        </div>

    )
}

export default ProfileStatus;
