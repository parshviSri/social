import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo";

const GET_PROFILES_BY_ADDRESS = `query Profiles($ownedBy:[EthereumAddress!]) {
  profiles(request: { ownedBy:$ownedBy, limit: 10 }) {
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
const getProfileByAddressRequest = (ethereumAddress,ownedBy) => {

  return apolloClient.query({
    query: gql(GET_PROFILES_BY_ADDRESS),
    variables: {
      request: {
        ethereumAddress,
        ownedBy,
      },
      ownedBy,
    },
  });
};

export const getProfileByAddress = async (_address) => {
  const address = _address[0];

  const result = await getProfileByAddressRequest(address,_address);

  return result.data;
};
