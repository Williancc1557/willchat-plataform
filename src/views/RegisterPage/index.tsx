import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { FormContainerStyled, FormStyled } from "./styled";
import { InputPassword, InputText } from "../../components/InputText";
import { SnackBar } from "../../components/SnackBar";
import { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { useSignUp } from "../../hooks/useSignUp";
import { useNavigate } from "react-router-dom";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const { signUp, error, isLoading } = useSignUp();
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();

  const [snackOpen, setSnackOpen] = useState(false);

  return (
    <>
      <Header />
      <FormContainerStyled onSubmit={handleSubmit(signUp)}>
        <FormStyled method="post">
          <div className="title-container">
            <h2 className="title">cadastro</h2>
          </div>
          <div className="content">
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <InputText
                icon={MdDriveFileRenameOutline}
                type="text"
                register={register("name", { required: true })}
                placeholder="Type your name"
              />
            </div>
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
              disabled={isLoading}
              className="submit-button"
              onClick={() => setSnackOpen(true)}
              type="submit"
            >
              Sign up
            </button>
          </div>
          <div className="form-sign-in">
            <span>Already have account?</span>
            <button
              onClick={() => navigate("/login")}
              type="button"
              className="sign-in-redirect"
            >
              Sign in now
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
