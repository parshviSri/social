import React from 'react';
import { connect } from "react-redux";
import FollowerIcon from './follower-icon';
export const FollowerList = (props) => {
      const items = props?.followers?.items ;
    return (
      <div className='text-center'>
        <p className="text-2xl m-4">Wow new followers</p>
        <div className="flex flex-row">
          {items && items.map((fllwr) => (
            <FollowerIcon
              key={fllwr.id}
              url={fllwr.wallet.defaultProfile?.picture?.original?.url}
            />
          ))}
        </div>
      </div>
    );
}


export default connect(
  (st) => ({
    followers: st.reducer.followersSlice?.followers,
  }),
  {}
)(FollowerList);