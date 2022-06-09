import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };
    // При объявлении метода через стрелочную функцию не теряется контекст вызова
    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        if (this.state.status) {
            this.props.updateStatus(this.state.status);
        }
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };
    
    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.status !== this.props.status && this.state.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ? (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || "No status"}
                        </span>
                    </div>
                ) : (
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            value={this.state.status}
                            onBlur={this.deactivateEditMode}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
