import React from "react";
import Profile from "./Profile.jsx";
import {
    getUserProfile,
    getStatus,
    updateStatus,
    addPost,
    savePhoto,
} from "../../redux/profile-reducer.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            // Следующий код ай ай ай это редирект через js
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId ){
            this.refreshProfile();
        }
        
    }
    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    addPost={this.props.addPost}
                    posts={this.props.posts}
                    savePhoto={this.props.savePhoto}
                />
            </>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    posts: state.profilePage.posts,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        addPost,
        savePhoto,
    }),
    withRouter
    // withAuthRedirect
)(ProfileContainer);
