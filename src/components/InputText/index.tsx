import { UseFormRegisterReturn } from "react-hook-form";
import { InputStyled } from "./styled";
import { IconType } from "react-icons";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

interface InputTextProps {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  icon: IconType;
}

export const InputPassword = (props: InputTextProps) => {
  const [showText, setShowText] = useState(false);

  return (
    <InputStyled>
      <div className={`group ${props.className}`}>
        <props.icon className="icon" />
        <input
          placeholder={props.placeholder}
          {...props.register}
          type={showText ? "text" : "password"}
          className="input"
        />
        <button
          className="eye-icon-container"
          onClick={() => setShowText(!showText)}
        >
          {showText ? (
            <FaEye className="eye-icon" />
          ) : (
            <FaEyeSlash className="eye-icon" />
          )}
        </button>
      </div>
    </InputStyled>
  );
};

export const InputText = (props: InputTextProps) => {
  return (
    <InputStyled>
      <div className={`group ${props.className}`}>
        <props.icon className="icon" />
        <input
          placeholder={props.placeholder}
          {...props.register}
          type={props.type}
          className="input"
        />
      </div>
    </InputStyled>
  );
};
