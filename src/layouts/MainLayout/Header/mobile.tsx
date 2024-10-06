/* eslint-disable @next/next/no-img-element */
"use client";

import cls from "classnames";
import Image from "next/image";

import { Dropdown } from "@/components/Dropdown";
import { NAVS } from "./data";
import Link from "next/link";
import { Button } from "@/components/Button";

export const HeaderMobile = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cls(
        "fixed w-full top-0 z-[1000] h-[68px] flex items-center justify-center p-[15px] backdrop-blur transition border-b border-b-[rgba(255,255,255,0.15)]"
      )}
    >
      <div className="flex justify-between items-center w-content">
        <Image src="/images/logo.png" width={128} height={32} alt="logo" />

        <div className="flex items-center gap-1">
          <Link href="/" target="_blank" passHref className="ml-3">
            <Button spanClassName="items-center !text-[10px] py-0.5 rounded-[8px]">
              Connect Wallet
            </Button>
          </Link>
          <div className="flex items-center">
            <Dropdown items={NAVS} />
          </div>
        </div>
      </div>
    </div>
  );
};
