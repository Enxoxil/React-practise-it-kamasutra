import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/img/user.png";
import styles from "./users.module.scss";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.pagination}>
                {pages.map((p) => {
                    return (
                        <span
                            className={
                                props.currentPage === p && styles.selectedPage
                            }
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}
                        >
                            {p}
                        </span>
                    );
                })}
            </div>
            <div>
                {props.users.map((u) => (
                    <div key={u.id}>
                        <span>
                            <NavLink to={"/Profile/" + u.id}>
                                <img
                                    src={
                                        u.photos.small != null
                                            ? u.photos.small
                                            : userPhoto
                                    }
                                />
                            </NavLink>
                        </span>
                        <span>
                            {u.followed ? (
                                <button
                                    disabled={props.isFollowing.some(
                                        (id) => id === u.id
                                    )}
                                    onClick={() => {
                                        props.unfollow(u.id);
                                    }}
                                >
                                    {" "}
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.isFollowing.some(
                                        (id) => id === u.id
                                    )}
                                    onClick={() => {
                                        props.follow(u.id);
                                    }}
                                >
                                    {" "}
                                    Follow
                                </button>
                            )}
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
