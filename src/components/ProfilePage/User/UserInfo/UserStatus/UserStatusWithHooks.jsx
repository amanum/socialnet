import React, {useState} from 'react';

const UserStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {editMode &&
                <div>
                    <input onChange={onStatusChange} type="text" onBlur={deactivateEditMode} value={status}
                           autoFocus={true}/>
                </div>
            }
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                </div>
            }
        </div>
    );
}

export default UserStatusWithHooks;
