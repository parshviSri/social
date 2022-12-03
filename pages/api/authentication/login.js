import { apolloClient } from '../apollo';
import { getAddressFromSigner, signText } from './ethers.sevice';
import { gql } from "@apollo/client/core";

import { getAuthenticationToken, setAuthenticationToken } from './state';
const GET_CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`;
export const generateChallenge = async (request) => {
  const result = await apolloClient.query({
    query: gql(GET_CHALLENGE),
    variables: {
      request,
    },
  });

  return result.data.challenge;
};
const AUTHENTICATION = `
  mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
 }
`;
const authenticate = async (request) => {
  const result = await apolloClient.mutate({
    mutation: gql(AUTHENTICATION),
    variables: {
      request,
    },
  });

  return result.data.authenticate;
};

export const login = async (address) => {
  if (getAuthenticationToken()) {
    console.log('login: already logged in');
    return;
  }


  // we request a challenge from the server
  const challengeResponse = await generateChallenge({ address });

  // sign the text with the wallet
  const signature = await signText(challengeResponse.text);

  const authenticatedResult = await authenticate({ address, signature });
  setAuthenticationToken(authenticatedResult.accessToken);

  return authenticatedResult;
};
export const argsBespokeInit = () => {
  return process.argv.find((c) => c === "--init") !== undefined;
};
(async () => {
  if (argsBespokeInit()) {
    await login();
  }
})();