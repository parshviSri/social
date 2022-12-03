/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { ipfsUrl } from "../../../../utils/ipfs-url";
const Post = (props) => {
  const { post } = props;
  const { content, media } = post.metadata;
  let url;
  console.log(media);
  if(media.length>0){
 url = media[0]?.original.url.includes("ipfs")
  ? ipfsUrl(media[0]?.original?.url)
  : media[0]?.original.url;
  }
  console.log(url);
  
  return (
    <div className="px-3">
      <div className="w-72 h-72 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out p-4">
        <p>{content}</p>
        {url && (
          <img src={url} alt="post-image" className="object-fill h-32 w-64" />
        )}
      </div>
    </div>
  );
};

export default Post;
