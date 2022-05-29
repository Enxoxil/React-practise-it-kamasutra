import * as axios from "axios";
import React from "react";
import userPhoto from "../../assets/img/user.png";

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div>
                {this.props.users.map((u) => (
                    <div key={u.id}>
                        <span>
                            <img
                                src={
                                    u.photos.small != null
                                        ? u.photos.small
                                        : userPhoto
                                }
                            />
                        </span>
                        <span>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        this.props.unfollow(u.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        this.props.follow(u.id);
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
        );
    }
}

// let Users = (props) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios
//                 .get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then((response) => {
//                     props.setUsers(response.data.items);
//                 });
//         }
//     };

//     return (
//         <div>
//             <button onClick={getUsers}>Get Users</button>

//             {props.users.map((u) => (
//                 <div key={u.id}>
//                     <span>
//                         <img
//                             src={
//                                 u.photos.small != null
//                                     ? u.photos.small
//                                     : userPhoto
//                             }
//                         />
//                     </span>
//                     <span>
//                         {u.followed ? (
//                             <button
//                                 onClick={() => {
//                                     props.unfollow(u.id);
//                                 }}
//                             >
//                                 Unfollow
//                             </button>
//                         ) : (
//                             <button
//                                 onClick={() => {
//                                     props.follow(u.id);
//                                 }}
//                             >
//                                 Follow
//                             </button>
//                         )}
//                     </span>
//                     <span>
//                         <span>
//                             <div>{u.name}</div>
//                             <div>{u.status}</div>
//                         </span>
//                         <span>
//                             <div>{"u.location.city"}</div>
//                             <div>{"u.location.country"}</div>
//                         </span>
//                     </span>
//                 </div>
//             ))}
//         </div>
//     );
// };
export default Users;
