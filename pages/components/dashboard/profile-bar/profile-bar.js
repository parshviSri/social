import React from 'react';
import  CoverBand  from './cover-band';
import { connect } from "react-redux";
import ProfileIcon from './profile-icon';
import Notifications from './notifications';
export const ProfileBar = (props) => {
    const { userProfile,searchProfile, notifications } = props;
    let coverurl;
    let profileurl;
    let name;
    let handle;
      if(searchProfile?.profileId){
        coverurl = searchProfile?.coverPicture?.original?.url;

         profileurl = searchProfile?.picture.original?.url;

         name = searchProfile.name;
         handle = searchProfile.handle
      }
      else{
          coverurl = userProfile?.coverPicture?.original?.url;
         profileurl = userProfile?.picture;
         name = userProfile.name;
         handle = userProfile.handle
      }
       
    return (
      <div>
        <CoverBand coverImg={coverurl} />

        <div className="flex text-center border">
          <ProfileIcon profileImg={profileurl} />
          <div className="ml-16 text-2xl">
            <p>{name}</p>
            <p>{handle} </p>
          </div>
        </div>
        <div className='m-4'>
          {!searchProfile?.profileId && (
            <Notifications notis={notifications?.result} />
          )}
        </div>
      </div>
    );
}

export default connect(
  (st) => ({
    userProfile: st.reducer.profileSlice.userProfile,
    searchProfile:st.reducer.profileSlice.searchedProfile,
    notifications: st.reducer.notificationsSlice
  }),
  {}
)(ProfileBar);