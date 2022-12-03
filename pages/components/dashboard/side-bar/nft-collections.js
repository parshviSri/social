import React from 'react';
import NftImage from './nft-image';
const NftCollections = (props) => {
    const {nftCollection} = props;
    
    return (
        <div>
            <p>NFT Collections</p>
            <div className='flex flex-wrap'>
                {nftCollection && nftCollection.map((nft)=><NftImage key ={nft.tokenId} nft={nft}/>)}
            </div>
        </div>
    );
}

export default NftCollections;
