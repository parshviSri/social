import * as types from './action-types';
export const getUserAccount =(account)=>{
    const payload = account;
    return {type :types.USER_ACCOUNT,payload}
}
export const getSearchAccount = (account) => {
  const payload = account;
  return { type: types.SEARCH_ACCOUNT, payload };
};

export const getUserProfile = (profile) => {
  const payload = profile;
  return { type: types.USER_PROFILE, payload };
};
export const addSearchProfile = (profile) => {
  const payload = profile;
  return { type: types.SEARCHED_PROFILE, payload };
};
export const getSearchProfile = (profile) => {
  const payload = profile;
  return { type: types.GET_SEARCHED_PROFILE, payload };
};

export const getRecentPublications = (publications) =>{
  const payload = publications;
  return {type: types.GET_RECENT_PUBLICATIONS,payload}
}
export const getRecentFollowers = (followers) => {
  const payload = followers;
  return { type: types.GET_RECENT_FOLLOWERS, payload };
};
export const getRecentFollowings = (followings) => {
  const payload = followings;
  return { type: types.GET_RECENT_FOLLOWINGS, payload };
};
export const getRecentNotifications = (notifications) => {
  const payload = notifications;
  return { type: types.GET_RECENT_NOTIFICATIONS, payload };
};
export const getPendingFollowerRequest =(pendingRequest) =>{
  const payload = pendingRequest;
  return {type:types.GET_PENDING_FOLLOWERS_REQUEST,payload}
}
export const getNFTCollectionRequest = (nftCollection) => {
  const payload = nftCollection;
  return { type: types.GET_NFT_COLLECTIONS, payload };
};
export const getPopupStatus = (status) => {
  const payload = status;
  return { type: types.GET_POPUP_STATE, payload };
};
export const getLiveStreamData = (data) => {
  const payload = data;
  return { type: types.GET_LIVE_STREAM_DATA, payload };
};
export const getOnChainId = (data) => {
  const payload = data;
  return { type: types.GET_ON_CHAIN_ID, payload };
};
