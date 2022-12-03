import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo";

const GET_ON_CHAIN_IDENTITY = `query Profile($profileId: ProfileId!) {
  profile(request: { profileId: $profileId }) {
    onChainIdentity {
      ens {
        name
      }
      proofOfHumanity
      sybilDotOrg {
        verified
        source {
          twitter {
            handle
          }
        }
      }
      worldcoin {
        isHuman
      }
    }
  }
}`;
const getOnCahinIdentityRequest = (profileId) => {
  return apolloClient.query({
    query: gql(GET_ON_CHAIN_IDENTITY),
    variables: {
      profileId
    },
  });
};

export const getOnChainId = async (profileid) => {

  const result = await getOnCahinIdentityRequest(profileid);

  return result.data;
};
