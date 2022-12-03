import React,{useState,useEffect} from 'react';
import AddEns from './addEns';
import AddWorldCoin from './addWorldCoin'
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
      <div className='mt-4 text-center'>
        <p className=' text-4xl'>On Chain Id</p>
        {onchainId?.onChainIdentity?.ens?.name ? (
          <div>
            <p className='text-2xl'>
              ENS : {onchainId?.onChainIdentity?.ens?.name}
              
            </p>
          </div>
        ) : (
          <div></div>
        )}
        <div className='text-2xl mt-2'>
          <div> World Coin : {onchainId?.onChainIdentity?.worldcoin?.isHuman ? "Verfied":
          <AddWorldCoin />
          }
          </div>
        </div>
      </div>
    );
}



