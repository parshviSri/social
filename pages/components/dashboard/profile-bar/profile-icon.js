/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {ipfsUrl} from '../../../utils/ipfs-url';
const ProfileIcon = (props) => {
    const url = props.profileImg ?ipfsUrl(props.profileImg):'/';
    return (
      <div >
       
          <img
            src={url}
            className="border rounded-full w-16 h-16"
            alt="profile-pic"
          />

      </div>
    );
}

export default ProfileIcon;
