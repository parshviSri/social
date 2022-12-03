import { create as ipfsHttpClient } from "ipfs-http-client";
const projectId = "2DHokEdxuooxCjqRGClU6INqosy";
const projectSecret = process.env.NEXT_PUBLIC_PROJECT_SECRECT_KEY;
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});
export const addFile = async (_file) => {
  const file = _file;
  try {
    const added = await client.add(file, {
      progress: (prog) => console.log(`received: ${prog}`),
    });
    const url = `ipfs://${added?.path}`;
    return url;
  } catch (error) {
    console.log("Error uploading file: ", error);
  }
};
export function makeFileObjects(jsonObj) {
  // You can create File objects from a Blob of binary data
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!
  const blob = new Blob([JSON.stringify(jsonObj)], {
    type: "application/json",
  });

  const files = [
    new File(["contents-of-file-1"], "plain-utf8.txt"),
    new File([blob], "hello.json"),
  ];
  return files;
}
