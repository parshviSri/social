import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo";

const GET_SEARCH_PROFILE = `query Search($searchText:Search!) {
  search(request: {
    query: $searchText,
    type: PROFILE,
    limit: 10
  }) {
    ... on ProfileSearchResult {
      __typename 
      items {
        ... on Profile {
          ...ProfileFields
        }
      }
      pageInfo {
        prev
        totalCount
        next
      }
    }
  }
}

fragment MediaFields on Media {
  url
  mimeType
}

fragment ProfileFields on Profile {
  profileId: id,
  name
  bio
  attributes {
    displayType
    traitType
    key
    value
  }
  isFollowedByMe
  isFollowing(who: null)
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
        ...MediaFields
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
        ...MediaFields
      }
    }
  }
  ownedBy
  dispatcher {
    address
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
      contractAddress
    }
    ... on RevertFollowModuleSettings {
      type
      contractAddress
    }
    ... on UnknownFollowModuleSettings {
      type
      contractAddress
      followModuleReturnData
    }
  }
}`;
const getSearchProfileByRequest = ( searchText) => {
  return apolloClient.query({
    query: gql(GET_SEARCH_PROFILE),
    variables: {
      request: {
        searchText,
      },
      searchText,
    },
  });
};

export const getSearchProfile = async (searchText) => {
  const result = await getSearchProfileByRequest(searchText);

  return result.data;
};
