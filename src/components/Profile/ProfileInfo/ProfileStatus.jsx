import React from 'react';
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateMode = () => {
        this.setState({
            editMode : true
        })
    };

    deactivateMode = () => {
        this.setState({
            editMode: false
        })
    };

    render() {
        return (
            <div className={s.status}>
                {
                    this.state.editMode ?
                        <div>
                            <input type="text" name="" id=""
                                   value={this.props.status}
                                   autoFocus={true}
                                   onBlur={this.deactivateMode}/>
                        </div> :
                        <div>
                            <span onDoubleClick={this.activateMode}>{this.props.status}</span>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
