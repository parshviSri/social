import React from "react";
import Post from "./post";
import { connect } from "react-redux";

const CreatePost = (props) => {
  const { publications } = props;
  return (
    <div className="flex flex-row overflow-x-auto w-72 m-6">
      {publications &&
        publications.items.map((pubs) => {
          const post = pubs.__typename === "Post" && (
            <Post key={pubs.id} post={pubs} />
          );
          return post;
        })}
    </div>
  );
};

export default connect(
  (st) => ({
    publications: st.reducer.publicationsSlice?.publications,
  }),
  {}
)(CreatePost);
