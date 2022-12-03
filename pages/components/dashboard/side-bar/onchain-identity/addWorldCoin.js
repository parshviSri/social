
 import { WorldIDWidget } from "@worldcoin/id";
import { getworldCoinVerification } from "../../../../api/onchain/getWorldCoinVerify";
import React from 'react';

const AddWorldCoin = () => {
  const verfiyUser = async (verificationResponse) => {
    if (verificationResponse) {
      let merkle_root = verificationResponse?.merkle_root;
      let nullifier_hash = verificationResponse?.nullifier_hash;
      let proof = abi.decode(["uint256[8]"], verificationResponse?.proof)[0];
      // eslint-disable-next-line
      const result =await getworldCoinVerification(proof,nullifier_hash,merkle_root);
      console.log(result);
      
    } else {
      console.error("Some error has occured!!");
    }
  };
  return (
    <div>
      <div>
        <WorldIDWidget
          actionId="wid_staging_036bd1d06ba1d6385bbe360d263f8d5e" // obtain this from developer.worldcoin.org
          signal="my_signal"
          enableTelemetry
          onSuccess={(verificationResponse) => verfiyUser(verificationResponse)}
          onError={(error) => console.error(error)}
        />
      </div>
    </div>
  );
}

export default AddWorldCoin;



