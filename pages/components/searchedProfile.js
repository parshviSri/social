/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ipfsUrl } from '../utils/ipfs-url';

const SearchedProfile = (props) => {
    const {profile} = props;
    const url = ipfsUrl(profile?.picture?.original?.url);
    const name = profile.name;
    const handle = profile.handle
    return (
      <div className="m-2 border rounded flex">
        <img
          src={url}
          className="border rounded-full w-8 h-8"
          alt="profile-pic"
        />
        <div>
          <p className="text-xsm">{handle}</p>
          <span className="ml-2">{name}</span>
        </div>
      </div>
    );
}

export default SearchedProfile;

