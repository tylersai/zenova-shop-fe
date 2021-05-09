export const getHeaderConfig = (usr) => {
  let currentUser = usr;
  if (typeof usr === "function") {
    currentUser = usr().currentUserState.data;
  }
  return {
    headers: {
      Authorization:
        currentUser &&
        currentUser.access_token &&
        `Bearer ${currentUser.access_token}`,
    },
  };
};
