/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ipfsUrl } from '../../../utils/ipfs-url';

const NotificationCard = (props) => {
    const { notifications } = props;
    const defaultPicUrl = notifications?.wallet?.defaultProfile?.picture?.original?.url;
    const defaultPic = defaultPicUrl&&  ipfsUrl(defaultPicUrl)
    let url = notifications?.profile?.picture?.original?.url?ipfsUrl(
      notifications?.profile?.picture?.original?.url
    ):'/people.png';
    const handle = notifications?.wallet?.defaultProfile
      ? notifications?.wallet?.defaultProfile?.handle
      : notifications?.profile?.handle; 
    const type =notifications?.__typename;
    let content;
    switch(type){
        case "NewReactionNotification":
            content = ` has liked your ${notifications?.publication.__typename.toLowerCase()}`;
            break;
        case "NewCommentNotification":
            content = ` has commented on ${notifications?.comment?.commentOn?.metadata?.name.toLowerCase()}`;
            break;
        case "NewFollowerNotification":
            url = notifications?.wallet ?.defaultProfile?.picture?.original?.url
            content = ` has started following you`;
            break;
        case "NewCollectNotification":
            url = notifications?.wallet ?.defaultProfile?.picture ?notifications?.wallet ?.defaultProfile?.picture?.original?.url:'/people.png'
            content = ` has started collected your post`;
            break;
    }
    return (
      <div className="m-2 border rounded flex">
        <img
          src={defaultPicUrl ? defaultPic : url}
          className="border rounded-full w-8 h-8 "
          alt="notification-profile-pic"
        />
        <p className="text-xsm m-3">
          {" "}
          {handle}
          {content}
        </p>
      </div>
    );
}

export default NotificationCard;
