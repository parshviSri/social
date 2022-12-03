import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo";

const VALIDATE_METADATA = `query ValidatePublicationMetadata($metadata: PublicationMetadataV2Input!) {
  validatePublicationMetadata(request: {
    metadatav2: $metadata
  }) {
    valid
    reason
  }
}`;
const validateMetaDataByRequest = (metadata) => {
  return apolloClient.query({
    query: gql(VALIDATE_METADATA),
    variables: {
      metadata,
    },
  });
};
export const validateMetaData = async (metadata) => {


  const result = await validateMetaDataByRequest(metadata);
  return result.data;
};
const POST_PUBLICATIONS = `mutation CreatePostTypedData($profileId: ProfileId!, $contentUri: Url!) {
  createPostTypedData(request: {
    profileId: $profileId,
    contentURI: $contentUri,
    collectModule: {
      revertCollectModule: true
    },
    referenceModule: {
      followerOnlyReferenceModule: false
    }
  }) {
    id
    expiresAt
    typedData {
      types {
        PostWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
    }
  }
}`;
const postPublicationsByRequest = ( profileId,contentUri) => {
  return apolloClient.mutate({
    mutation: gql(POST_PUBLICATIONS),
    variables: {
      profileId,
      contentUri,
    },
  });
};

export const postPublications = async (profileId,contentUri) => {

  const result = await postPublicationsByRequest(profileId, contentUri);

  return result.data;
};
