import React from "react";

import CreatePost from "./create-post";
export const RecentPublications = () => {
  return (
    <div className="bg-white">
      <p className=" font-bold text-2xl text-gray-800">
        Recent Publications
      </p>
      <CreatePost />
    </div>
  );
};

export default RecentPublications;
