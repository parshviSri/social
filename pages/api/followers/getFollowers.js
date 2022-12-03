import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo";

const GET_FOLLOWERS = `query Followers ($profileId: ProfileId!) {
  followers(request: { 
                profileId: $profileId,
              limit: 10
             }) {
       items {
      wallet {
        address
        defaultProfile {
          id
          name
          bio
          attributes {
            displayType
            traitType
            key
            value
          }
          followNftAddress
            metadata
          isDefault
          handle
          picture {
            ... on NftImage {
              contractAddress
              tokenId
              uri
              verified
            }
            ... on MediaSet {
              original {
                url
                mimeType
              }
            }
          }
          coverPicture {
            ... on NftImage {
              contractAddress
              tokenId
              uri
              verified
            }
            ... on MediaSet {
              original {
                url
                mimeType
              }
            }
          }
          ownedBy
          dispatcher {
            address
            canUseRelay
          }
          stats {
            totalFollowers
            totalFollowing
            totalPosts
            totalComments
            totalMirrors
            totalPublications
            totalCollects
          }
          followModule {
            ... on FeeFollowModuleSettings {
              type
              contractAddress
              amount {
                asset {
                  name
                  symbol
                  decimals
                  address
                }
                value
              }
              recipient
            }
            ... on ProfileFollowModuleSettings {
             type
            }
            ... on RevertFollowModuleSettings {
             type
            }
          }
        }
      }
      totalAmountOfTimesFollowed
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}`;
const getFollowersByRequest = ( profileId) => {
  return apolloClient.query({
    query: gql(GET_FOLLOWERS),
    variables: {
      
      profileId,
    },
  });
};

export const getFollowers = async ( profileId) => {

  const result = await getFollowersByRequest(profileId);

  return result.data;
};
