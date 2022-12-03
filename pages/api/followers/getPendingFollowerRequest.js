import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo";

const GET_PENDING_FOLLOWERS_REQUEST = `query Followers {
  pendingApprovalFollows(request: { 
              limit: 10
             }) {
    items {
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
            mimeType
            height
            width
            url
          }
          small {
            url
            width
            height
            mimeType
          }
          medium {
            url
            width
            height
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
            width
            url
            height
            mimeType
          }
          small {
            height
            width
            url
            mimeType
          }
          medium {
            url
            width
            height
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
    pageInfo {
      prev
      next
      totalCount
    }
  }
}`;
const getPendingFollowerRequestByRequest = () => {
  return apolloClient.query({
    query: gql(GET_PENDING_FOLLOWERS_REQUEST),
    
   
  });
};

export const getPendingFollowerRequest = async () => {

  const result = await getPendingFollowerRequestByRequest();

  return result.data;
};
