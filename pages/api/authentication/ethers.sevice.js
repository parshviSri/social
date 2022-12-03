import { ethers } from "ethers";




export const getAccount = async () => {
  await window?.ethereum.request({ method: "eth_requestAccounts" });
  const accounts = await window?.ethereum.request({ method: "eth_accounts" });
  let account = accounts[0].toString();
  return account;
};


export function getSigner() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider.getSigner();
}
export const getAddressFromSigner = () => {
  return getSigner().address;
};

export const signText = (text) => {
  return getSigner().signMessage(text);
};
export const getAddress = async(name) =>{
  console.log(name);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const address =  provider.getBalance(name);
  console.log(address);
  return address
}

