import React, {Component} from 'react';

class UserStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        let newStatus = e.currentTarget.value;
        this.setState({
            status: newStatus
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div>
                            <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} type="text" value={this.state.status} autoFocus={true}/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                        </div>
                }
            </div>
        );
    }
}

export default UserStatus;
