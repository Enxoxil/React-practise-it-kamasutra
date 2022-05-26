const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: false,
        //     fullName: "Pupkin Vasya",
        //     status: "I`m a boss",
        //     location: { city: "Pupkovshina", country: "Zimbabve" },
        // },
        // {
        //     id: 2,
        //     followed: false,
        //     fullName: "Zalupkin Petro",
        //     status: "Hey brother",
        //     location: { city: "Zalupka", country: "Zaluposransk" },
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     fullName: "Vova Da",
        //     status: "Doyou or no doyou",
        //     location: { city: "Kyiv", country: "Ukraine" },
        // },
        // {
        //     id: 4,
        //     followed: false,
        //     fullName: "Dima No",
        //     status: "No",
        //     location: { city: "Muxosransk", country: "Pomoyka" },
        // },
    ],
};

const usersReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === actions.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === actions.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...actions.users]}
        }

        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
