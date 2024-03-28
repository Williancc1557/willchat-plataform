import { UseFormRegisterReturn } from "react-hook-form";
import { InputStyled } from "./styled";
import { IconType } from "react-icons";

interface InputTextProps {
  className?: string;
  type?: string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  icon: IconType;
}

export const InputText = (props: InputTextProps) => {
  return (
    <InputStyled>
      <div className={`group ${props.className}`}>
        <props.icon className="icon"/>
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
