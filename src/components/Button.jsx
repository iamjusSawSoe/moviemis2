import React from "react";

const Button = (props) => (
  <button
    type="button"
    className={`${props.styles} cursor-pointer py-2 px-6 bg-secondary font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] hover:bg-dimBlack shadow-more hover:shadow-3xl shadow-secondary border-2 border-secondary bg-blend-multiply`}
    onClick={props.onClick ? () => props.onClick() : null}
  >
    {props.text}
  </button>
);

export default Button;
