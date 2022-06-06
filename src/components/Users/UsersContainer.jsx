import React from "react";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowing,
    getUsers,
} from "../../redux/users-reducer.js";
import { Redirect } from "react-router-dom";
import Users from "./Users.jsx";
import Preloader from "../common/preloader/Preloader.jsx";

class UsersContainers extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    };

    render() {
        
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFollowing={this.props.isFollowing}
                    isAuth={this.props.isAuth}
                />
            </>
        );
    }
}

const AuthRedirectComponent = (props) => {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;
    return <UsersContainers {...props} />
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowing,
    getUsers,
})(AuthRedirectComponent);
