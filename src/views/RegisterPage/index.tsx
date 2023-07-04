import { SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { FormContainerStyled, FormStyled } from "./styled";
import { InputText } from "../../components/InputText";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const { register, handleSubmit } = useForm<Inputs>();

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
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <InputText
                type="text"
                register={register("email", { required: true })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <InputText
                type="text"
                register={register("password", { required: true })}
              />
            </div>

            <button className="submit-button" type="submit">
              Sign up
            </button>
          </div>
        </FormStyled>
      </FormContainerStyled>
    </>
  );
};
