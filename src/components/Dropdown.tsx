/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useCallback } from "react";
import cls from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";

import { useClickOutside } from "@/hooks/useClickOutside";
import { useHashChange } from "@/hooks/useHashchange";
import { Button } from "@/components/Button";
import Image from "next/image";
import { SOCIALS } from "@/views/Sections";

interface MenuItem {
  name: string;
  href: string;
}

interface Props {
  items: MenuItem[];
}

export const Dropdown = ({ items }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const elementRef = useRef();
  const { hash, scrolledSection } = useHashChange();

  const checkActive = useCallback(
    (href: string) => {
      return false;
      if (scrolledSection) {
        return href.substring(2) === scrolledSection;
      }

      return href.substring(1) === hash;
    },
    [hash, scrolledSection]
  );

  useClickOutside(elementRef, () => {
    setIsOpen(false);
  });

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  return (
    <div className="relative ml-2 md:ml-4">
      <span className="rounded-md shadow-sm relative z-10">
        <button onClick={toggle}>
          {isOpen ? (
            <svg
              width="25"
              height="25"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2"
            >
              <path
                d="M21 4L5 20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 4L21 20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1.5"
            >
              <path
                d="M4.08008 7.42139H22.8481"
                stroke="white"
                strokeWidth="1.564"
                strokeLinecap="round"
              />
              <path
                d="M4.08008 12.6343H22.8481"
                stroke="white"
                strokeWidth="1.564"
                strokeLinecap="round"
              />
              <path
                d="M4.08008 17.8481H22.8481"
                stroke="white"
                strokeWidth="1.564"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </span>
      <div
        ref={elementRef}
        className={cls(
          "transition-all duration-300 origin-top-right -translate-y-2",
          {
            "opacity-0 invisible scale-90": !isOpen,
            "opacity-[1] visible scale-100": isOpen,
          }
        )}
      >
        <div
          className="absolute w-screen -right-4 mt-6 -top-20 origin-top-right bg-black h-[calc(100vh)] overflow-hidden"
          role="menu"
        >
          <div className="relative z-10 flex flex-col items-center py-11">
            <Image
              className="mb-6 mt-10"
              src="/images/logo.png"
              width={146}
              height={36.5}
              alt="logo"
            />

            {items.map((item, index) => (
              <div key={item.href} className="flex gap-[6px]">
                {false && (
                  <Image
                    src="/images/star-white.svg"
                    width={18}
                    height={31.28}
                    alt=""
                  />
                )}
                <Link
                  className={cls(
                    "py-4 relative text-center transition text-white hover:text-gray-400 text-xl font-[200]",
                    {
                      "font-bold": checkActive(item.href),
                    }
                  )}
                  href={item?.href || ""}
                  onClick={toggle}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <Link href="/" target="_blank" passHref className="w-fit mt-4">
              <Button className="min-w-[208px]">
                {`Connect Wallet `}{" "}
                <img src="/images/vector.svg" className="ml-2 h-4" alt="" />
              </Button>
            </Link>

            <p className="font-[200] mt-8 text-sm">Join with us: </p>
            <div className="flex gap-6 mt-4">
              {SOCIALS.map((item, index) => (
                <Link href={item.href} key={index} target="_blank">
                  <img src={item.icon} alt="" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
