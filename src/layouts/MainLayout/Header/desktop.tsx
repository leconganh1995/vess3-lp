/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/Button";
import { useHashChange } from "@/hooks/useHashchange";
import cls from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { NAVS } from "./data";

interface NavItemProps {
  name: string;
  href: string;
  isActive: boolean;
}

export const HeaderDesktop = () => {
  return (
    <div className="fixed w-[95%] left-1/2 -translate-x-1/2 top-0 z-[1000] h-[98px] flex items-center justify-center">
      <div className="flex justify-between items-center w-full max-w-content">
        <Image src="/images/logo.png" width={177} height={53} alt="logo" />

        <Nav />

        <Link href="/" target="_blank" passHref className="ml-3">
          <Button spanClassName="items-center">
            Connect Wallet{" "}
            <img src="/images/vector.svg" className="ml-2 h-4" alt="" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Nav = () => {
  const { hash, scrolledSection } = useHashChange();
  const checkActive = useCallback(
    (href: string) => {
      if (scrolledSection) {
        return href.substring(2) === scrolledSection;
      }

      return href.substring(1) === hash;
    },
    [hash, scrolledSection]
  );

  return (
    <div className="flex items-center justify-between" id="navbar-cta">
      <ul className="flex p-[11px_13px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-full">
        {NAVS.map((item, index) => (
          <NavItem isActive={checkActive(item.href)} {...item} key={index} />
        ))}
      </ul>
    </div>
  );
};

const NavItem = ({ isActive, name, href }: NavItemProps) => {
  return (
    <Link href={href} className="block py-2 px-3 transition" passHref>
      <li className={cls("text-sm text-white")}>{name}</li>
    </Link>
  );
};
