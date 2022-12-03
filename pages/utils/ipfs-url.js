export const ipfsUrl =(url) =>{
    if(url?.includes('://')){
        if( url.includes('ipfs')){
            const spliturl = url?.split("://");
            let _url;
            if (!url?.includes("lens")) {
              _url = `https://ipfs.io/${spliturl[0]}/${spliturl[1]}`;
              return _url;
            }
        }
    
    }
    else{
        let _url =`https://ipfs.io/${url}`;
        return _url;
    }
    
    return url
}