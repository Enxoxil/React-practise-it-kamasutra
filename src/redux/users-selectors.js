import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
};

// создавая селектор через либу надо вызвать createSelector и
// передать первым аргументом простой селектор(зависимость) и
// последним аргументом то куда результат сохранится в данном случае
// в users 

export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
};
export const getUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching;
};
export const getIsFollowingSelector = (state) => {
    return state.usersPage.isFollowing;
};

export const superSelector = createSelector(getUsersSelector, getIsFetchingSelector, (users, isFetching) => {
    return users.filter((u) => true);
});

export const getPortionSizeSelector = (state) => {
    return state.usersPage.portionSize;
};