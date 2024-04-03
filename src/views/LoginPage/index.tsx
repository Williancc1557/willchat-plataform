import { SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { FormContainerStyled, FormStyled } from "./styled";
import { InputPassword, InputText } from "../../components/InputText";
import { SnackBar } from "../../components/SnackBar";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";

interface Inputs {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const signIn: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const [snackOpen, setSnackOpen] = useState(false);

  return (
    <>
      <Header />
      <FormContainerStyled onSubmit={handleSubmit(signIn)}>
        <FormStyled method="post">
          <div className="title-container">
            <h2 className="title">Login</h2>
          </div>
          <div className="content">
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <InputText
                icon={MdOutlineEmail}
                type="text"
                register={register("email", { required: true })}
                placeholder="Type your email"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <InputPassword
                icon={IoKey}
                type="password"
                register={register("password", { required: true })}
                placeholder="Type your password"
              />
            </div>

            <button
              className="submit-button"
              onClick={() => setSnackOpen(true)}
              type="submit"
            >
              Sign up
            </button>
          </div>
        </FormStyled>
      </FormContainerStyled>

      {/* <SnackBar open={snackOpen} setOpen={setSnackOpen} severity="success">
        This is a success message
      </SnackBar> */}

      <SnackBar open={snackOpen} setOpen={setSnackOpen} severity="error">
        error
      </SnackBar>
    </>
  );
};
