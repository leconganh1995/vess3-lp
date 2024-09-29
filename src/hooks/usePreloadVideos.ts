import { useEffect } from "react";

const videos = [
  // {
  //   url: "https://s3.ap-southeast-1.amazonaws.com/assets.blazewallet.xyz/feature-bg.webm",
  //   type: "video/webm",
  // },
  // {
  //   url: "https://s3.ap-southeast-1.amazonaws.com/assets.blazewallet.xyz/speed.webm",
  //   type: "video/webm",
  // },
];

export const usePreloadVideos = () => {
  useEffect(() => {
    videos.forEach(({ url, type }) => {
      const videoElement = document.createElement("video");
      videoElement.src = url;
      (videoElement as any).type = type;
      videoElement.preload = "auto";
      videoElement.load();
    });
  }, []);

  return null;
};
