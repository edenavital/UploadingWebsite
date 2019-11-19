import React from "react";
import "./Button.css";

interface Props {
  click: (e: any) => void;
  disabled?: boolean;
  name: string;
}

const Button: React.FC<Props> = ({ click, disabled, name }) => {
  return (
    <button className="Button" onClick={click} disabled={disabled}>
      {name}
    </button>
  );
};

export default Button;
