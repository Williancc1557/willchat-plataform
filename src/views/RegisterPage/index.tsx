import { SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { FormContainerStyled, FormStyled } from "./styled";
import { InputText } from "../../components/InputText";
import { SnackBar } from "../../components/SnackBar";
import { useState } from "react";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const { register, handleSubmit } = useForm<Inputs>();
  const [snackOpen, setSnackOpen] = useState(false);

  return (
    <>
      <Header />
      <FormContainerStyled onSubmit={handleSubmit(onSubmit)}>
        <FormStyled method="post">
          <div className="title-container">
            <h2 className="title">cadastro</h2>
          </div>
          <div className="content">
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <InputText
                type="text"
                register={register("name", { required: true })}
                placeholder="Type your name"
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <InputText
                type="text"
                register={register("email", { required: true })}
                placeholder="Type your email"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <InputText
                type="text"
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

      <SnackBar open={snackOpen} setOpen={setSnackOpen} severity="success">
        This is a success message
      </SnackBar>
    </>
  );
};
