import React from "react";
import styles from "../style";
import { discount, robot2 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <p className={`${styles.paragraph}`}>
          <span className="text-white">$XSHIB </span>
          Is <span className="text-white">Coming </span>
          To ERC-20
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          THE <span className="text-gradient">NEXT </span>SHIB
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <p className={`${styles.paragraph}, max-w-[470px] `}>
        The year is 2049. Machines have already taken control over humanity.
        Their next conquest is the canine world.{" "}
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot2}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] rounded-full"
      />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
