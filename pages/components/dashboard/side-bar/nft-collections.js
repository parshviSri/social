import React from 'react';
import NftImage from './nft-image';
const NftCollections = (props) => {
    const {nftCollection} = props;
    
    return (
      <div className="mt-24 text-center">
        <p className='text-3xl'>NFT Collections</p>
        <div className="flex flex-wrap mt-8">
          {nftCollection &&
            nftCollection.map((nft) => (
              <NftImage key={nft.tokenId} nft={nft} />
            ))}
        </div>
      </div>
    );
}

export default NftCollections;
