import { getProfileByAddress } from "../../api/profile/address-profile";
import store from "../../state/store";
export async function getProfile() {
  const account = store.getState().reducer.accountSlice.userAccount;
  const profile = await getProfileByAddress([account]);
  const updatedProfile = profileData(profile.profiles.items[0]);
  return updatedProfile;
}

function profileData(profile) {
  const updatedProfile = {};
  updatedProfile.id = profile.id;
  updatedProfile.name = profile.name;
  updatedProfile.bio = profile.bio;
  updatedProfile.handle = profile.handle;
  updatedProfile.picture = profile.picture.original.url;
  updatedProfile.coverPicture = profile.coverPicture;
  updatedProfile.totalFollowers = profile.stats.totalFollowers;
  updatedProfile.totalFollowing = profile.stats.totalFollowing;
  updatedProfile.totalFollowing = profile.stats.totalFollowing;
  updatedProfile.totalMirrors = profile.stats.totalMirrors;
  updatedProfile.totalPublications = profile.stats.totalPublications;
  updatedProfile.totalCollects = profile.stats.totalCollects;
  return updatedProfile;
}
