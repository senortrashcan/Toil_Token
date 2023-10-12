import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-lg outline-none ${styles} cursor-pointer`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href =
          "https://pancakeswap.finance/swap?outputCurrency=0xE7882b023a4295f63eD5FB06AD410b0E1A1304A8";
      }}
    >
      Buy now
    </button>
  );
};

export default Button;
