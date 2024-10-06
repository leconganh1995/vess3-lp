/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion } from "framer-motion";
import { SOCIALS } from "./data";
import { useSectionState } from "@/store";
import { SectionIndexEnum } from "@/constants";

export const Footer = () => {
  const { currentSectionIndex } = useSectionState();

  return (
    <motion.div
      className="hidden lg:flex fixed z-50 left-1/2 bottom-5 -translate-x-1/2 items-center justify-between w-[95%] max-w-[918px] border-[0.5px] border-[rgba(255,255,255,0.5)] rounded-[5px] p-[10px_15px]"
      animate={{
        opacity: currentSectionIndex > SectionIndexEnum.Hero ? 1 : 0,
      }}
    >
      <p className="text-[10px]">Privacy Policy and Terme</p>
      <div className="flex items-center gap-4">
        {SOCIALS.map((item, index) => (
          <Link key={index} href={item.href}>
            <img className="h-[14px" src={item.icon} alt="" />
          </Link>
        ))}
      </div>
      <p className="text-[10px]">All rights reserved @ Vess3l</p>
    </motion.div>
  );
};
