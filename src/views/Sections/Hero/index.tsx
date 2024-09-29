/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";

import { Button } from "@/components/Button";
import { Container, ContainerProps } from "@/components/Container";
import { TextGradient } from "@/components/TextGradient";
import Link from "next/link";

const SOCIALS = [
  { icon: "/images/facebook.svg", href: "/" },
  { icon: "/images/twitter.svg", href: "/" },
  { icon: "/images/instagram.svg", href: "/" },
];

export const Hero = (props: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={containerRef} {...props}>
      <div className="max-w-content mx-auto h-full relative">
        <div className="max-w-content mx-auto">
          <h2 className="text-[80px] max-w-[555px] leading-[1.1] absolute top-[26%]">
            Welcome to Vessel
          </h2>
        </div>

        <div className="absolute bottom-20 w-full">
          <div className="w-full flex justify-between items-end">
            <div className="flex gap-4 items-center">
              <TextGradient className="font-bold">Vessel</TextGradient>
              <img src="/images/vector-2.svg" alt="" />
              <p className="text-sm font-bold">
                The First Premium Set of Digital Asset Indexe
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {SOCIALS.map((item, index) => (
                <Link href={item.href} key={index} target="_blank">
                  <img src={item.icon} alt="" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-7">
            <div className="flex gap-10 items-center ml-28">
              <Button>Connect Wallet</Button>
              <Button>Explore The Site</Button>
            </div>

            <p className="max-w-[297px] text-sm">
              Vessel is a digital finance protocol focused on providing top
              cryptocurrency indices
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
