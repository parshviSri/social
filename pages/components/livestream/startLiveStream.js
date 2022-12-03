import React, { useEffect, useRef } from "react";
import { Client } from "@livepeer/webrtmp-sdk";
import { createLiveStream } from "../../api/livestream/livestream";
import { connect } from "react-redux";
import * as actions from "../../state/action-creator";

export const StartLiveStream = (props) => {
  const {getLiveStreamData} = props;
  const videoEl = useRef(null);
  const stream = useRef(null);

  useEffect(() => {
    (async () => {
      videoEl.current.volume = 0;

      stream.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      videoEl.current.srcObject = stream.current;
      videoEl.current.play();
    })();
  });

      const onButtonClick = async () => {
        const streamInfo = await createLiveStream();
        getLiveStreamData(streamInfo)
         const { streamKey } = streamInfo;

        if (!stream.current) {
          alert("Video stream was not started.");
        }

        if (!streamKey) {
          alert("Invalid streamKey.");
          return;
        }

        const client = new Client();

        const session = client.cast(stream.current, streamKey);

        session.on("open", () => {
          console.log("Stream started.");
          alert("Stream started; visit Livepeer Dashboard.");
        });

        session.on("close", () => {
          console.log("Stream stopped.");
        });

        session.on("error", (err) => {
          console.log("Stream error.", err.message);
        });
      };

      return (
        <div>
          <video ref={videoEl} />
          <button onClick={onButtonClick}>
            Start
          </button>
        </div>
      );
}


export default connect((st) => ({}), {
  getLiveStreamData : actions.getLiveStreamData
})(StartLiveStream);