 import { combineReducers } from "redux";
 import * as types from './action-types';
 const initialAccount ={
    userAccount:"",
    searchAccount:""
 }
 export const accountSlice = (state = initialAccount,action)=>{
    switch(action.type){
        case types.USER_ACCOUNT:
            return{...state, ["userAccount"]:action.payload};
        case types.SEARCH_ACCOUNT:
            return { ...state, ["searchAccount"]: action.payload };
        default:
            return state
    }
 }
  
const initialProfile={
    userProfile:{},
    searchedProfile:{}
};
 export const profileSlice = (state = initialProfile, action) => {
   switch (action.type) {
     case types.USER_PROFILE:
       return { ...state, ["userProfile"]:action.payload };
     case types.SEARCHED_PROFILE:
        return { ...state, ["searchedProfile"]: action.payload };
     default:
        return state;
 
   }
 };
 
 const initialPublications =null;
 export const publicationsSlice =(state = initialPublications,action) =>{
   switch(action.type){
    case types.GET_RECENT_PUBLICATIONS:
      return action.payload;
    default:
      return state
   }
 }
 const initialFollowers = null;
 export const followersSlice = (state = initialFollowers, action) => {
   switch (action.type) {
     case types.GET_RECENT_FOLLOWERS:
       return action.payload;
      case types.GET_PENDING_FOLLOWERS_REQUEST:
        const pendingFollowerRequest =action.payload;
        const {followerSlice} = state
        return {
          ...state,
          ...followerSlice,
          pendingFollowerRequest,
        };
     default:
       return state;
   }
 };

 const initialFollowings = null;
 export const followingsSlice = (state = initialFollowings, action) => {
   switch (action.type) {
     case types.GET_RECENT_FOLLOWINGS:
       return action.payload;
     default:
       return state;
   }
 };
  const initialNotifications = null;
  export const notificationsSlice = (state = initialNotifications, action) => {
    switch (action.type) {
      case types.GET_RECENT_NOTIFICATIONS:
        return action.payload;
      default:
        return state;
    }
  };
  const initialNFTcollection = null;
  export const nftcollectionSlice = (state = initialNFTcollection, action) => {
    switch (action.type) {
      case types.GET_NFT_COLLECTIONS:
        return action.payload;
      default:
        return state;
    }
  };
  const initialOnChainId = null;
  export const onChainIdSlice = (state = initialOnChainId, action) => {
    switch (action.type) {
      case types.GET_ON_CHAIN_ID:
        return action.payload;
      default:
        return state;
    }
  };
  const initialSearchedProfile ={searchedProfile:''};
  export const searchedProfileSlice = (state = initialSearchedProfile, action) => {
    switch (action.type) {
      case types.GET_SEARCHED_PROFILE:
        return action.payload;
      default:
        return state;
    }
  };
  const initialPopup = { open: false };
  export const popupSlice = (state = initialPopup, action) => {
    switch (action.type) {
      case types.GET_POPUP_STATE:
        return action.payload;
      default:
        return state;
    }
  };
  const initialLiveStreamId = {stream:{}};
  export const liveStreamSlice = (state = initialLiveStreamId, action) => {
    switch (action.type) {
      case types.GET_LIVE_STREAM_DATA:
        return action.payload;
      default:
        return state;
    }
  };
const combinedReducer = combineReducers({
  accountSlice,
  profileSlice,
  publicationsSlice,
  followersSlice,
  followingsSlice,
  notificationsSlice,
  nftcollectionSlice,
  searchedProfileSlice,
  popupSlice,
  liveStreamSlice,
  onChainIdSlice,
});
 export default combinedReducer;