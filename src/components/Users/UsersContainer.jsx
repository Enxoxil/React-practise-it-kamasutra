import React from "react";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowing,
    getUsers,
    setPortionSize,
} from "../../redux/users-reducer.js";
import Users from "./Users.jsx";
import Preloader from "../common/preloader/Preloader.jsx";
import {
    getUsersSelector,
    getPageSizeSelector, 
    getUsersCountSelector,
    getCurrentPageSelector,
    getIsFetchingSelector,
    getIsFollowingSelector,
    getPortionSizeSelector,
} from "../../redux/users-selectors.js";
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
                    portionSize={this.props.portionSize}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFollowing: getIsFollowingSelector(state),
        portionSize: getPortionSizeSelector(state),
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowing,
    getUsers,
    setPortionSize,
})(UsersContainers);
