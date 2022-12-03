import React, { useState, useRef } from "react";
import * as actions from "../../state/action-creator";
import { connect } from "react-redux";
import { getSearchProfile } from "../api/search/getSearchProfile";
import SearchedProfile from "./searchedProfile";
import { addProfile } from "../utils/add-profile";
export const Searchbar = (props) => {
  const formRef = useRef();
  const [search, setSearch] = useState(false);
  const { searchedProfile, profile, addSearchProfile, selectedProfile } = props;

  const handleInputChange = async (e) => {
    setSearch(true);
    const payload = e.target.value;
    const searchedProfileResult = await getSearchProfile(payload);
    searchedProfile(searchedProfileResult?.search);
  };
  const handleAddSeachProfile = async (_profile) => {
    addSearchProfile(_profile);
    setSearch(false);

    formRef.current.reset();
    const { ownedBy, profileId } = _profile;
    await addProfile(ownedBy, profileId);
  };
  return (
    <div>
      <form ref={formRef}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="searchedProfile"
          type="text"
          placeholder="Search"
          onChange={handleInputChange}
        />
      </form>
      {search &&
        profile?.items?.map((prof) => (
          <div
            key={prof.profileId}
            onClick={async () => {
              await handleAddSeachProfile(prof);
            }}
          >
            <SearchedProfile profile={prof} />
          </div>
        ))}
    </div>
  );
};

export default connect(
  (st) => ({
    selectedProfile: st.reducer?.profileSlice?.searchedProfile,
    profile: st.reducer.searchedProfileSlice,
  }),
  {
    searchedProfile: actions.getSearchProfile,
    addSearchProfile: actions.addSearchProfile,
  }
)(Searchbar);
