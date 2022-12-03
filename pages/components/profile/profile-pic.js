/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { connect } from "react-redux";
import { ipfsUrl } from '../../utils/ipfs-url';
import { addProfile } from '../../utils/add-profile';
import * as actions from "../../state/action-creator";

export const ProfilePic = (props) => {
    const {account,userProfile,addSearchProfile} = props;
    const handleprofileClick =async()=>{
      await addProfile(account,userProfile.id);
      addSearchProfile({})
    }
    if(userProfile){
        const profile_pic = ipfsUrl(userProfile?.picture);
        return (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <div onClick={handleprofileClick}>
            <img
              src={profile_pic}
              alt="profile-pic"
              className="border rounded-full w-8 h-8"
            />
          </div>
        );
    }
    else{
        return<></>
    }
    
}

export default connect(
  (st) => ({
    account: st.reducer.accountSlice.userAccount,
    userProfile: st.reducer.profileSlice.userProfile,
  }),
  { addSearchProfile: actions.addSearchProfile }
)(ProfilePic);
