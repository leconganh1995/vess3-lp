/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";

import { Button } from "@/components/Button";
import { Container, ContainerProps } from "@/components/Container";
import { TextGradient } from "@/components/TextGradient";
import Link from "next/link";

export const SOCIALS = [
  { icon: "/images/facebook.svg", href: "/" },
  { icon: "/images/twitter.svg", href: "/" },
  { icon: "/images/instagram.svg", href: "/" },
];

export const Hero = (props: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={containerRef} {...props}>
      <div className="flex flex-col lg:block max-w-content mx-auto h-full relative">
        <div className="max-w-content mx-auto mt-[30px] lg:mt-0">
          <h2 className="text-center lg:text-left mx-auto text-[40px] lg:text-[80px] max-w-[278px] lg:max-w-[555px] leading-[1.1] lg:absolute top-[26%]">
            Welcome to Vessel
          </h2>
        </div>

        <div className="flex flex-col justify-between lg:block lg:absolute bottom-20 w-full flex-1">
          <div className="w-full flex justify-center lg:justify-between items-end">
            <div className="flex gap-4 items-center mt-1 lg:mt-0">
              <TextGradient className="font-bold">Vessel</TextGradient>
              <img
                className="w-[27px] lg:w-[29px]"
                src="/images/vector-2.svg"
                alt=""
              />
              <p className="text-sm font-bold hidden lg:block">
                The First Premium Set of Digital Asset Indexe
              </p>
              <p className="text-sm font-bold lg:hidden">
                The First Premium Se
              </p>
            </div>

            <div className="hidden lg:flex flex-col gap-4">
              {SOCIALS.map((item, index) => (
                <Link href={item.href} key={index} target="_blank">
                  <img src={item.icon} alt="" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mt-7">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 items-center mt-6 lg:mt-0 lg:ml-28 order-2 lg:order-1">
              <Button className="w-[181px] lg:w-fit">Connect Wallet</Button>
              <Button className="w-[181px] lg:w-fit">Explore The Site</Button>
            </div>

            <p className="max-w-[297px] text-xs font-[200] text-center lg:text-left lg:text-sm order-1 lg:order-2 mx-auto lg:mx-[unset]">
              Vessel is a digital finance protocol focused on providing top
              cryptocurrency indices
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
