import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-lg outline-none ${styles} cursor-pointer`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href =
          "https://app.uniswap.org/#/swap?outputCurrency=0x000000000000000000000000000000000000dead";
      }}
    >
      Buy now
    </button>
  );
};

export default Button;
