import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="https://app.uniswap.org/#/swap?outputCurrency=0xdc2021d04bb3d6a131c481b5943e9d2bd4ecf797">
    <div className="{`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`">
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">BUY</span>
          </p>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">NOW</span>
        </p>
      </div>
    </div>
  </a>
);

export default GetStarted;
