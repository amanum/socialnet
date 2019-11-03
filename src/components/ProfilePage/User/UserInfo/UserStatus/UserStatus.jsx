import React, {Component} from 'react';

class UserStatus extends Component {

    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div>
                            <input onBlur={this.deactivateEditMode} type="text" value={this.props.status} autoFocus={true}/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                        </div>
                }
            </div>
        );
    }
}

export default UserStatus;
