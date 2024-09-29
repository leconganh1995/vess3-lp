import { useEffect, useState } from "react";

export const useCheckAllAttachmentsLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaElements = document.querySelectorAll("img, video");
    let mediaLoaded = 0;

    mediaElements.forEach((media) => {
      const eventName = media.tagName === "IMG" ? "load" : "canplaythrough";

      media.addEventListener(eventName, () => {
        mediaLoaded++;
        if (mediaLoaded === mediaElements.length) {
          setIsLoaded(true);
        }
      });

      // if images and videos is loaded
      if (
        (media.tagName === "IMG" && (media as HTMLImageElement).complete) ||
        (media.tagName === "VIDEO" &&
          (media as HTMLVideoElement).readyState >= 4)
      ) {
        media.dispatchEvent(new Event(eventName));
      }
    });
  }, []);

  return isLoaded;
};
