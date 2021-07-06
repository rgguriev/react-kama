import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <div>
            <input onChange={this.onStatusChange} autoFocus={true}
                   value={this.state.status}
                   onBlur={this.deactivateMode} />
          </div>
          : <div>
            <span onDoubleClick={ this.activateEditMode }>{this.props.status || '-----'}</span>
          </div>
        }

      </div>
    )
  }
}
export default ProfileStatus;