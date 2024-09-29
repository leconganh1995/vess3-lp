import React, { useState, useRef, useCallback } from "react";
import cls from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";

import { useClickOutside } from "@/hooks/useClickOutside";
import { useHashChange } from "@/hooks/useHashchange";
import { Button } from "@/components/Button";
import Image from "next/image";

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
      <span className="rounded-md shadow-sm">
        <button onClick={toggle}>
          {isOpen ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          className="absolute w-screen -right-4 mt-6 origin-top-right bg-black h-[calc(100vh_-_85px)] overflow-hidden"
          role="menu"
        >
          <motion.div
            initial={{
              x: "-50%",
              y: "-60%",
            }}
            animate={{
              x: "-50%",
              y: "-60%",
              rotate: [0, 360],
              transition: {
                duration: 2,
                repeat: Infinity,
              },
            }}
            className="absolute top-0 left-1/2 aspect-square w-[300%] md:w-[250%] opacity-80 rounded-full blur-[60px] bg-[linear-gradient(208.03deg,_rgba(255,_103,_255,_0.5)_-1.63%,_#2944CC_80.03%)]"
          >
            <div className="absolute left-1/2 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 bg-black w-1/2 h-1/2" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center py-11">
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
                    "py-4 relative text-center transition text-white hover:text-gray-400",
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
              <Button className="min-w-[300px]">{`Download Wallet `}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
