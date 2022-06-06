import React from "react";
import Profile from "./Profile.jsx";
import { getUserProfile } from "../../redux/profile-reducer.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
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
const AuthRedirectComponent = (props) => {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>;
    return <ProfileContainer {...props} />
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

let WithRouterDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(
    WithRouterDataContainerComponent
);
