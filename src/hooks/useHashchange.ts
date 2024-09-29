import { useState, useEffect } from "react";
import _throttle from "lodash/throttle";
import { useParams } from "next/navigation";

export const useHashChange = () => {
  const [hash, setHash] = useState("");
  const [scrolledSection, setScrolledSection] = useState("");
  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  useEffect(() => {
    const sections = document.querySelectorAll(".main-section");

    const onScroll = _throttle(() => {
      sections.forEach((section: HTMLDivElement) => {
        const rect = section.getBoundingClientRect();
        const distanceToBottom = window.innerHeight - rect.top;

        if (distanceToBottom > 100 && rect.top >= -section.offsetHeight + 100) {
          const currentSection = section.getAttribute("id");
          setHash(`#${currentSection}`);
          setScrolledSection(currentSection);
        }
      });
    }, 50);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { hash, scrolledSection };
};
