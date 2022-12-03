import React from 'react';
import { connect } from "react-redux";

export const TotalStats = (props) => {
    const { userProfile,searchProfile } = props;
    const totalPublications = searchProfile.profileId
      ? searchProfile.stats.totalPublications
      : userProfile.totalPublications;
    const totalFollowers = searchProfile.profileId
      ? searchProfile.stats.totalFollowers
      : userProfile.totalFollowers;
      const totalFollowing = searchProfile.profileId
        ? searchProfile.stats.totalFollowing
        : userProfile.totalFollowing;
    return (
      <div className="m-4 text-center">
        <p className="text-4xl mb-3">Your Stats</p>
        <div className="mt-1 mb-3 flex flex-row  text-slate-500 text-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <span className="ml-4">Total Publications: </span>
          <span className="ml-4 text-black bg-slate-500 border rounded-full  flex items-center justify-center">
            {totalPublications}
          </span>
        </div>
        <div className="mt-1 mb-3 flex flex-row  text-[#1134BF] text-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </span>
          <span className="ml-4">Total Followers:</span>
          <span className="ml-9 text-white bg-[#1134BF] border rounded-full flex items-center justify-center">
            {totalFollowers}
          </span>
        </div>
        <div className="text-[#DF7E63] mt-1 mb-3 flex flex-row text-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>
          </span>

          <span className="ml-4">Total Followings:</span>
          <span className="ml-7 text-black bg-[#DF7E63] border rounded-full flex items-center justify-center">
            {totalFollowing}
          </span>
        </div>
      </div>
    );
}

export default connect(
  (st) => ({
    userProfile: st.reducer.profileSlice.userProfile,
    searchProfile: st.reducer.profileSlice.searchedProfile,
  }),
  {}
)(TotalStats);