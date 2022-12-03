import React from "react";
import { getAccount } from "../api/authentication/ethers.sevice";
import { connect } from "react-redux";
import { getProfile } from "./profile/profile";
import * as actions from "../state/action-creator";
import { login } from "../api/authentication/login";
import {getPublications} from '../api/publications/getpublication';
import {getFollowers} from '../api/followers/getFollowers';
import {getFollowings} from '../api/followings/getFollowings';
import {getNotification} from '../api/notifications/getNotification';
import {getPendingFollowerRequest} from '../api/followers/getPendingFollowerRequest';
import { getNFTCollection } from "../api/nft-collections/getNFTcollections";
import { getOnChainId } from "../api/onchain/getOnChainIdentity";
export const Login = (props) => {
  const {
    getUserAccount,
    getUserProfile,
    getRecentPublications,
    getRecentFollowers,
    getRecentFollowings,
    getRecentNotifications,
    _getPendingFollowerRequest,
    _getNFTCollection,
    _getOnChainId
  } = props;
  const handleLogin = async () => {
    const _userAccount = await getAccount();
    getUserAccount(_userAccount);
    await login(_userAccount);
    const profile = await getProfile();
    getUserProfile(profile);
    const publications = await getPublications(_userAccount, profile.id);
    getRecentPublications(publications);
    const followers = await getFollowers( profile.id);
    getRecentFollowers(followers);
    const followings = await getFollowings([_userAccount]);
    getRecentFollowings(followings)
    const notifications = await getNotification(_userAccount,profile.id)
    getRecentNotifications(notifications)
    const pendingRequest = await getPendingFollowerRequest();
   _getPendingFollowerRequest(pendingRequest);
   const nftCollection = await getNFTCollection(_userAccount);
   _getNFTCollection(nftCollection);
   const onchainId = await getOnChainId(profile.id);
   _getOnChainId(onchainId)
  };
  return (
    <div>
      <button
        className="bg-[#022EF8] w-32 h-12 text-[#DCEDFF]"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
export default connect((st) => ({}), {
  getUserAccount: actions.getUserAccount,
  getUserProfile: actions.getUserProfile,
  getRecentPublications: actions.getRecentPublications,
  getRecentFollowers: actions.getRecentFollowers,
  getRecentFollowings: actions.getRecentFollowings,
  getRecentNotifications: actions.getRecentNotifications,
  _getPendingFollowerRequest: actions.getPendingFollowerRequest,
  _getNFTCollection : actions.getNFTCollectionRequest,
  _getOnChainId : actions.getOnChainId
})(Login);
