import React from 'react';
import Login from './login';
import Image from 'next/image';
import ProfilePic from './profile/profile-pic';
import { connect } from "react-redux";
import Searchbar from './searchbar';
export const Navbar = (props) => {
  const {userProfile} =props;
    return (
      <div className="container">
        <div className="flex flex-row mt-4 ml-2">
          <div className="basis-1/6 flex flex-row">
            <div className="basis-1/2 ml-2">
              <Image
                src="/lens-dashboard.png"
                width={60}
                height={60}
                alt="logo"
              />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
          </div>
          <div className="basis-2/3">
            <div><Searchbar/></div>
          </div>
          <div className="basis-1/6 flex flex-row">
            <div className="basis-1/6 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="basis-1/6 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
            <div className="basis-1/6 ml-2 ">{Object.keys(userProfile).length>0?<ProfilePic/>:<Login/>}</div>
          </div>
        </div>
      </div>
    );
}

export default connect(
  (st) => ({
    userProfile: st.reducer.profileSlice.userProfile,
  }),
  {}
)(Navbar);