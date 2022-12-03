import { ethers } from "ethers";
import WorldCoinIris from "../../artifacts/contracts/Worldcoin.sol/WorldCoinIris.json";

const contractAddress = "0x5eCbEC56cCB4cFB31aB546A18976c075E688e9aF";
const WorldCoinAddress = "0x1ed4f41F945044FB19Af5378D82068AFC2f0FCd9";

export const getAccount = async () => {
  await window?.ethereum.request({ method: "eth_requestAccounts" });
  const accounts = await window?.ethereum.request({ method: "eth_accounts" });
  let account = accounts[0].toString();
  return account;
};

export const connectContract = async () => {
  const provider = new ethers.providers.Web3Provider(window?.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, Iris.abi, signer);
  return contract;
};
export const connectWorldCoin = async () => {
  const provider = new ethers.providers.Web3Provider(window?.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    WorldCoinAddress,
    WorldCoinIris.abi,
    signer
  );
  return contract;
};
