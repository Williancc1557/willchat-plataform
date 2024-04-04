import { SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { FormContainerStyled, FormStyled } from "./styled";
import { InputPassword, InputText } from "../../components/InputText";
import { SnackBar } from "../../components/SnackBar";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../hooks/useSignIn";

interface Inputs {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { error, isLoading, signIn } = useSignIn();
  const navigate = useNavigate();

  const signInHandler: SubmitHandler<Inputs> = async (data) => {
    await signIn(data);
  };

  const [snackOpen, setSnackOpen] = useState(false);

  return (
    <>
      <Header />
      <FormContainerStyled onSubmit={handleSubmit(signInHandler)}>
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
              disabled={isLoading}
            >
              Sign up
            </button>
          </div>
          <div className="form-sign-in">
            <span>Don’t have account?</span>
            <button
              onClick={() => navigate("/register")}
              type="button"
              className="sign-in-redirect"
            >
              Create Now
            </button>
          </div>
        </FormStyled>
      </FormContainerStyled>

      {/* <SnackBar open={snackOpen} setOpen={setSnackOpen} severity="success">
        This is a success message
      </SnackBar> */}

      <SnackBar open={snackOpen} setOpen={setSnackOpen} severity="error">
        {error}
      </SnackBar>
    </>
  );
};
