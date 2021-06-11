let friendList = [];
let index = 1;

const displayFriendList = (state) => {
  const { names } = state.addFriend;

  if (!names.length) return [];

  friendList.push({ text: names, value: index++ });
  return friendList;
};

export const AddFriendSelector = {
  displayFriendList,
};
