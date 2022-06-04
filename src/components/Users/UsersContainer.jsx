import React from "react";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
} from "../../redux/users-reducer.js";
import * as axios from "axios";
import Users from "./Users.jsx";
import Preloader from "../common/preloader/Preloader.jsx";
import { getUsers } from "./../../api/api.js";

class UsersContainers extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize).then(
            (data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            }
        );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
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
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainers);
