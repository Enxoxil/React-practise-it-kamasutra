import React from "react";
import User from "./User.jsx";
import Paginator from "../common/Paginator/Paginator.jsx";

let Users = ({
    totalUsersCount,
    currentPage,
    pageSize,
    onPageChanged,
    users,
    portionSize,
    ...props
}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                portionSize={portionSize}
            />
            <div>
                {users.map((u) => (
                    <User
                        user={u}
                        isFollowing={props.isFollowing}
                        unfollow={props.unfollow}
                        follow={props.follow}
                        key={u.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;
