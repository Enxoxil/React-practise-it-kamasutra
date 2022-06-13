export const getUsersSelector = (state) => {
        return state.usersPage.users

};
export const getPageSizeSelector = (state) => {
        return state.usersPage.pageSize

};
export const getUsersCountSelector = (state) => {
        return state.usersPage.totalUsersCount

};
export const getCurrentPageSelector = (state) => {
        return state.usersPage.currentPage
};
export const getIsFetchingSelector = (state) => {
        return state.usersPage.isFetching

};
export const getIsFollowingSelector = (state) => {
        return state.usersPage.isFollowing

};


