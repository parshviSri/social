import React from 'react';
import { connect } from "react-redux";
import FollowerRequest from './follower-request';
import NftCollections from './nft-collections';
import { Onchain } from './onchain-identity/onchain';
export const SideBar = (props) => {
    const { approvals, nftCollection,onchainId } = props;
    return (
      <div>
        <FollowerRequest request={approvals?.pendingApprovalFollows?.items} />
        <NftCollections nftCollection={nftCollection?.items} />
        <Onchain onchainId={onchainId}/>
      </div>
    );
}

export default connect(
  (st) => ({
    approvals: st.reducer.followersSlice?.pendingFollowerRequest,
    nftCollection: st.reducer.nftcollectionSlice?.nfts,
    onchainId: st.reducer?.onChainIdSlice?.profile,
  }),
  {}
)(SideBar);
