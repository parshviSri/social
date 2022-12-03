/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { ipfsUrl } from '../../../utils/ipfs-url';

const NftImage = (props) => {
    const {nft} = props;
    const [baseUrl, setbaseUrl] = useState("");
    useEffect(() => {
        
      axios.get(nft?.contentURI).then((res) => {
        const url = ipfsUrl(res.data?.image);
        setbaseUrl(url);
      }).catch((err)=>console.log(err))
    }, []);
    return (
        <>
            {baseUrl && <img src={baseUrl} alt ="nft-image" width={100} height={100}/>}
        </>
    );
}

export default NftImage;
