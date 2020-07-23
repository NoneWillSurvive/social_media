import React from 'react';
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({
            editMode : true
        })
    };

    deactivateMode = () => {
        this.setState({
            editMode: false
        });
        debugger
        this.props.updateStatus(this.state.status);
    };

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if(this.props.status !== prevProps.status){
            this.setState({
                status : this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.status}>
                {
                    this.state.editMode ?
                        <div>
                            <input type="text" name="" id=""
                                   value={this.state.status}
                                   autoFocus={true}
                                   onBlur={this.deactivateMode}
                                   onChange={this.onChangeStatus}
                            />
                        </div> :
                        <div>
                            <span onDoubleClick={this.activateMode}>{this.state.status || "No status"}</span>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
