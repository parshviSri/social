import React, { useRef } from 'react';
import { connect } from "react-redux";
//  import ReactHlsPlayer from "react-hls-player";
export const SeeLiveStream = (props) => {
  const myInput = useRef('')
    const { streamData } = props;
    console.log(streamData);
     
    return (
      <div>
        {/* <input ref ={myInput}/>
        <ReactHlsPlayer
          src={`https://livepeercdn.studio/recordings/${myInput.current}/index.m3u8`}
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        /> */}
      </div>
    );
}



export default connect(
  (st) => ({
    streamData: st.reducer?.liveStreamSlice?.stream,
  }),
  {}
)(SeeLiveStream);