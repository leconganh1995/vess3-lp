/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";

export const useCheckVideosLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const videoElements = document.querySelectorAll(".preload-video");
    let videoLoaded = 0;

    const handleCanplayThrough = () => {
      videoLoaded++;
      if (videoLoaded === videoElements.length) {
        setIsLoaded(true);
      }
    };

    videoElements.forEach((video: HTMLVideoElement, index) => {
      video.addEventListener("canplaythrough", handleCanplayThrough);
      videoRefs.current[index] = video;

      if ((video as HTMLVideoElement).readyState >= 4) {
        video.dispatchEvent(new Event("canplaythrough"));
      }
    });

    return () => {
      videoRefs.current.forEach((video) =>
        video.removeEventListener("canplaythrough", handleCanplayThrough)
      );
    };
  }, []);

  return isLoaded;
};
