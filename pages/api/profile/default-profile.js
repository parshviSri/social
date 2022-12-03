import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo";

const GET_DEFAULT_PROFILES = `query Profiles($profileIds:[ProfileId!]) {
  profiles(request: { profileIds:$profileIds, limit: 10 }) {
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
        __typename
      }
      handle
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
        __typename
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
              symbol
              name
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

const getDefaultProfileRequest = (ethereumAddress, profileIds) => {
  return apolloClient.query({
    query: gql(GET_DEFAULT_PROFILES),
    variables: {
      request: {
        ethereumAddress,
        profileIds,
      },
      profileIds: profileIds,
    },
  });
};

export const getDefaultProfile = async (_address, profileId) => {
  const address = _address;

  const result = await getDefaultProfileRequest(address, profileId);

  return result.data;
};
