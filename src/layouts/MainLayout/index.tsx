"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HeaderDesktop } from "./Header/desktop";
import { Footer } from "./Footer";
import { HeaderMobile } from "./Header/mobile";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <div className="hidden xl:block">
            <HeaderDesktop />
          </div>

          <div className="xl:hidden">
            <HeaderMobile />
          </div>

          <Footer />
        </motion.div>
      </AnimatePresence>

      <div className="bg-black">{children}</div>
    </div>
  );
};
