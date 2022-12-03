import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo";

const GET_FOLLOWINGS = `query Following ($ownedBy : EthereumAddress!) {
  following(request: { 
                address:$ownedBy,
              limit: 10
             }) {
    items {
      profile {
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
            small {
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
              url
              width
              height
              mimeType
            }
            small {
              width
              url
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
      totalAmountOfTimesFollowing
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}`;
const getFollowingsByRequest = (ethereumAddress, ownedBy) => {
  return apolloClient.query({
    query: gql(GET_FOLLOWINGS),
    variables: {
      request: {
        ethereumAddress,
        ownedBy,
      },
      ownedBy,
    },
  });
};

export const getFollowings = async (_address) => {
  const address = _address[0];

  const result = await getFollowingsByRequest(address, address);

  return result.data;
};
