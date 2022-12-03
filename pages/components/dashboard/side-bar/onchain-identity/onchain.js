import React,{useState,useEffect} from 'react';
import AddEns from './addEns';
import {getAddress} from '../../../../api/authentication/ethers.sevice'
export const Onchain = (props) => {
    const [show,setshow] = useState(false);
    const[add,setadd] = useState('')
    const {onchainId} = props;
    const handleShowAdd = () =>{
      const _add =  getAddress(onchainId?.onChainIdentity?.ens?.name);
      setadd(_add);
    }
    console.log(onchainId);
    return (
      <div>
        <p>On Chain Id</p>
        {onchainId?.onChainIdentity?.ens?.name ? (
          <div>
            <p>
              ENS : {onchainId?.onChainIdentity?.ens?.name}
              {show ? (
                add
              ) : (
                <button onClick={handleShowAdd}>show address</button>
              )}
            </p>
          </div>
        ) : (
          <div></div>
        )}
        {/* <div>
          <div> World Coin : {onchainId?.onChainIdentity?.worldcoin?.isHuman ? "Verfied":
          // <AddWorldCoin />
          }
          </div>
        </div> */}
      </div>
    );
}



