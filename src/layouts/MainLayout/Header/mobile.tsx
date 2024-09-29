"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import cls from "classnames";

import { Dropdown } from "@/components/Dropdown";
import { NAVS } from "./data";
import { useGlobalState } from "@/store";

export const HeaderMobile = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [already, setAlready] = useState(false);
  const { isWindowLoaded } = useGlobalState();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAlready(true);
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={cls(
        "fixed w-full top-0 z-[1000] lg:h-[85px] flex items-center justify-center p-[15px] lg:p-[25px] backdrop-blur transition",
        {
          ["opacity-0"]: !already || !isWindowLoaded,
        }
      )}
    >
      <div className="flex justify-between items-center w-content">
        <Image
          src="/images/white-logo.png"
          width={92.34}
          height={35.22}
          alt="playton logo"
          onClick={scrollToTop}
        />

        <div className="flex items-center">
          <Dropdown items={NAVS} />
        </div>
      </div>
    </div>
  );
};
