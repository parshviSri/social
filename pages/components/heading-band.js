import React, { useState } from "react";
import Image from "next/image";
import * as actions from "../state/action-creator";
import { connect } from "react-redux";
import { createLiveStream } from "../api/livestream/livestream";
import Popup from "./popup";
import Post from "./post/post";
import StartLiveStream from "./livestream/startLiveStream";
import { SeeLiveStream } from "./livestream/seeLiveStream";
export const HeadingBand = (props) => {
  const { user } = props;
  const [open, setopen] = useState({
    post: false,
    stream: false,
  });
  const handleLiveStream = async () => {
    setopen({ post: false, stream: true });
    await createLiveStream();
  };
  const handleShowLiveStream = async () => {
    setopen({ post: false, stream: false, see: true });
    await createLiveStream();
  };
  return (
    <div className="container bg-[#EEF6FD]">
      <div className="flex flex-row ">
        <div className="basis-1/2">
          <div className="flex ">
            <div className="text-6xl ">Manage Your </div>
            <Image
              src="/lens-dashboard.png"
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <div className="text-3xl">
            <span className="text-[#0831E2]">Social Media</span>
            <span> Journey</span>
          </div>
          <div className="flex">
            <span>All your social app:</span>
            <span className="bg-[#DCE8FE] border rounded-xl pl-2 pr-2">
              One simple dashboard
            </span>
          </div>
        </div>
        <div className="basis-1/2 ">
          {Object.keys(user).length > 0 && (
            <div className="flex ">
              <div className="m-2">
                <button
                  className="bg-[#022EF8] w-32 h-12 text-[#DCEDFF]"
                  onClick={() => {
                    setopen({ post: true, stream: false });
                  }}
                >
                  Add post
                </button>
              </div>
              <div className="m-2">
                <button
                  className="bg-[#022EF8] w-32 h-12 text-[#DCEDFF]"
                  onClick={handleLiveStream}
                >
                  Start Live Stream
                </button>
              </div>
              <div className="m-2">
                <button
                  className="bg-[#022EF8] w-32 h-12 text-[#DCEDFF]"
                  onClick={handleShowLiveStream}
                >
                  Show Live Stream
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {open?.post && (
        <Popup>
          <Post />
        </Popup>
      )}
      {open?.stream && (
        <Popup>
          <StartLiveStream />
        </Popup>
      )}
      {open?.see && (
        <Popup>
          <SeeLiveStream />
        </Popup>
      )}
    </div>
  );
};

export default connect(
  (st) => ({
    user: st.reducer.profileSlice.userProfile,
    streamData: st.reducer.liveStreamSlice,
  }),
  {
    getPopupStatus: actions.getPopupStatus,
  }
)(HeadingBand);
