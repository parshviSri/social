import React from "react";
import { connect } from "react-redux";
import FollowerIcon from "../followers/follower-icon";
export const FollowingList = (props) => {
  const items = props?.following?.items;
  return (
    <div className="text-center">
      <p className="text-2xl m-4">Followings</p>
      <div className="flex flex-row">
        {items &&
          items.map((fllwr) => (
            <FollowerIcon
              key={fllwr.id}
              url={fllwr?.profile?.picture?.original?.url}
            />
          ))}
      </div>
    </div>
  );
};

export default connect(
  (st) => ({
    following: st.reducer.followingsSlice?.following,
  }),
  {}
)(FollowingList);
