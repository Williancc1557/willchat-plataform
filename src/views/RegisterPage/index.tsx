import { FormContainerStyled, FormStyled, HeaderStyled } from "./styled";

export const RegisterPage = () => {
  return (
    <>
      <HeaderStyled>
        <h1>WillChat</h1>
      </HeaderStyled>
      <FormContainerStyled>
        <FormStyled method="post">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />

          <button type="submit">aaa</button>
        </FormStyled>
      </FormContainerStyled>
    </>
  );
};
