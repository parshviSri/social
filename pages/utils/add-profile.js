import configureStore from '../state/store';
import * as actions from "../state/action-creator";
import {getPublications} from '../api/publications/getpublication';
import {getFollowers} from '../api/followers/getFollowers';
import {getFollowings} from '../api/followings/getFollowings';
import { getNFTCollection } from "../api/nft-collections/getNFTcollections";
import { getOnChainId } from '../api/onchain/getOnChainIdentity';
export const addProfile = async (account,id) => {  
  const publications = await getPublications(account, id);
  configureStore.dispatch(actions.getRecentPublications(publications)); 
  const followers = await getFollowers(id);
  configureStore.dispatch(actions.getRecentFollowers(followers));
  const followings = await getFollowings([account]);
  configureStore.dispatch(actions.getRecentFollowings(followings));
  const nftCollection = await getNFTCollection(account);
  configureStore.dispatch(actions.getNFTCollectionRequest(nftCollection));
  const onchainId = await getOnChainId(id);
  configureStore.dispatch(actions.getOnChainId(onchainId))
};
