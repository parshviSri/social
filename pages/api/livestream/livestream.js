import axios from "axios";
let config = {
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${process.env.NEXT_PUBLIC_LIVESTREAM_API_KEY}`,
  },
};
export const createLiveStream =async () =>{
    let body = {
      name: "test_stream",
      profiles: [
        {
          name: "720p",
          bitrate: 2000000,
          fps: 0,
          width: 1280,
          height: 720,
        },
        {
          name: "480p",
          bitrate: 1000000,
          fps: 0,
          width: 854,
          height: 480,
        },
        {
          name: "360p",
          bitrate: 500000,
          fps: 0,
          width: 640,
          height: 360,
        },
      ],
      record:true
    };
    const data =axios.post("https://livepeer.studio/api/stream",body,config).then((res)=>{
      console.log(res.data);
       return(res.data);
    })
   return(data);

}