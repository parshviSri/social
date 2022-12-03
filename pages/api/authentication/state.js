let authenticationToken = null;
export let setAuthenticationToken = (token) => {
  authenticationToken = token;
  localStorage.setItem("auth_token",token);
  console.log("setAuthenticationToken: token", token);
};

export let getAuthenticationToken = () => {
  return authenticationToken;
};
