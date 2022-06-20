import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/img/user.png";

let User = ({ user, isFollowing, unfollow, follow }) => {
    return (
        <div>
            <span>
                <NavLink to={"/Profile/" + user.id}>
                    <img
                        src={
                            user.photos.small != null
                                ? user.photos.small
                                : userPhoto
                        }
                    />
                </NavLink>
            </span>
            <span>
                {user.followed ? (
                    <button
                        disabled={isFollowing.some((id) => id === user.id)}
                        onClick={() => {
                            unfollow(user.id);
                        }}
                    >
                        {" "}
                        Unfollow
                    </button>
                ) : (
                    <button
                        disabled={isFollowing.some((id) => id === user.id)}
                        onClick={() => {
                            follow(user.id);
                        }}
                    >
                        {" "}
                        Follow
                    </button>
                )}
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </span>
        </div>
    );
};

export default User;
