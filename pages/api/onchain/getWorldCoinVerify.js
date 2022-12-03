import axios from "axios";
let config = {
  headers: {
    "content-type": "application/json",
  },
};
export const getworldCoinVerification = async (proof,nullifier_hash,merkle_root) => {
  let body = {
    action_id: "wid_staging_036bd1d06ba1d6385bbe360d263f8d5e",
    signal: "lens dashboard",
    proof,
    nullifier_hash,
    merkle_root: "<as_received_from_the_widget>",
  };
  const data = axios
    .post("https://livepeer.studio/api/stream", body, config)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
  return data;
};
