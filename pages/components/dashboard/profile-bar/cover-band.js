/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {ipfsUrl} from '../../../utils/ipfs-url';
 const CoverBand = (props) => {
    const {coverImg } = props
    const url = coverImg ?ipfsUrl(coverImg):'/coverband.png';
    return (
        <div>
            <img src={url}  height={500} alt ="coverImg"/>
        </div>
    );
}
export default CoverBand;

