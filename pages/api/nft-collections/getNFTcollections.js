import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo";

const GET_NFT_COLLECTIONS = `query Nfts($ownerAddress: EthereumAddress!) {
  nfts(request: {
    ownerAddress: $ownerAddress,
    limit: 10,
    chainIds: [137]
  }) {
    items {
      contractName
      contractAddress
      symbol
      tokenId
      owners {
        amount
        address
      }
      name
      description
      contentURI
      originalContent {
        uri
        metaType
      }
      chainId
      collectionName
      ercType
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}`;

const getNFTCollectionRequest = (ethereumAddress,ownerAddress) => {
  return apolloClient.query({
    query: gql(GET_NFT_COLLECTIONS),
    variables: {
      request: {
        ethereumAddress,
        ownerAddress,
      },
      ownerAddress
    },
  });
};

export const getNFTCollection = async (_address) => {
  const address = _address;

  const result = await getNFTCollectionRequest(address,address);

  return result.data;
};
