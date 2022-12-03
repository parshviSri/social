import React,{useState} from 'react';
import { addFile } from "../../utils/upload-to-ipfs";
import { connect } from "react-redux";
import {
  validateMetaData,
  postPublications,
} from "../../api/publications/postpublications";
const Post = (props) => {
    const {userProfile} = props
    const [newpost, setPost] = useState({
      description: "",
      image: "",
      imageFlag: false,
    });
       const handlePostImage = async (e) => {
         let postImage = await addFile(e.target.files[0]);
         setPost({ ...newpost, image: postImage, imageFlag: true });
       };
       const handlePost = async() =>{
        let metadatav2 = {
          version: "2.0.0",
          mainContentFocus: newpost?.image?"IMAGE":"TEXT_ONLY",
          metadata_id: "6162716327186732",
          description: `post created by ${userProfile?.handle} in lens dashboard `,
          locale: "en-US",
          content: newpost?.description,
          external_url: newpost?.image ? newpost.image : null,
          image: null,
          imageMimeType: null,
          name: `${userProfile?.handle} 's post`,
          attributes: [],
          tags: ["lens-dashboard"],
          appId: "lens-dashboard",
        };
        const valid =await validateMetaData(metadatav2);
        console.log(valid);
        if(valid?.validatePublicationMetadata?.valid){
          const url = await addFile(metadatav2)
          await postPublications(userProfile?.id,url)
        }
       }
    return (
      <div>
        <form className="shadow-md rounded ">
          {/* bio */}
          <div className="mb-4">
            <textarea
              className="
                         
                          shadow 
                          appearance-none
                          w-full
                          px-3
                          py-2
                          border 
                          rounded
                          text-white-700 
                          focus:border-blue-500 focus:outline-none
                          "
              placeholder="Add your thoughts.."
              onChange={(e) => {
                setPost({ ...newpost, description: e.target.value });
              }}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <div>
              {newpost.imageFlag && <img src={newpost.image} />}
              <input
                type="file"
                className="hidden"
                id="postImage"
                onChange={handlePostImage}
              />
              <label htmlFor="postImage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handlePost}
            >
              Add Your Post
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                setPost({ description: "", image: "", imageFlag: false });
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
}


export default connect(
  (st) => ({
    userProfile: st.reducer.profileSlice.userProfile,
  }),
  {}
)(Post);