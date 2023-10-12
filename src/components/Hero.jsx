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
          $TOIL Token : 0xE7882b023a4295f63eD5FB06AD410b0E1A1304A8
        </p>
      </div>

      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <p className={`${styles.paragraph}`}>
          $TOIL Locker : 0x8858611fA8C778bbC75D3b51F14635F624546891
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
        Simplicity For All, Working Hard For You.{" "}
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
