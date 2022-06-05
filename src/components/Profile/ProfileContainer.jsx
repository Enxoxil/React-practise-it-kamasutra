import React from "react";
import Profile from "./Profile.jsx";
import { setUserProfile, getUserProfile } from "../../redux/profile-reducer.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile} />
            </>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithRouterDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getUserProfile })(
    WithRouterDataContainerComponent
);
