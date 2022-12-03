/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ipfsUrl } from "../../../../utils/ipfs-url";
const FollowerIcon = (props) => {
  const { url } = props;
  let updatingUrl = url ? ipfsUrl(url) : "/people.png";
  return (
    <div>
      <img
        src={updatingUrl}
        alt="follower-pic"
        className="border rounded-full w-8 h-8"
      />
    </div>
  );
};

export default FollowerIcon;
