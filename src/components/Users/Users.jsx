import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/img/user.png";
import styles from "./users.module.scss";
import * as axios from "axios";
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
                                    onClick={() => {
                                        axios
                                            .delete(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "4e65e492-b016-4de4-8bdf-5761c6ec08a7",
                                                    }
                                                }
                                            )
                                            .then((response) => {
                                               if (response.data.resultCode === 0){
                                                    props.unfollow(u.id);
                                               }
                                            });
                                        
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        axios
                                            .post(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "4e65e492-b016-4de4-8bdf-5761c6ec08a7",
                                                    }
                                                }
                                            )
                                            .then((response) => {
                                               if (response.data.resultCode === 0){
                                                    props.follow(u.id);
                                               }
                                            });
                                        
                                    }}
                                >
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
