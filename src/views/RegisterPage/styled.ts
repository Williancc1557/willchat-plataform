import { styled } from "styled-components";
import { colors } from "../../colors/colors";

export const FormContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  min-height: 40vh;
  width: 100%;
  margin: 100px 0;
  color: ${colors.fontColor};
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    300deg,
    ${colors.primaryDark},
    ${colors.secondaryDark}
  );
  border-radius: 15px;
  min-height: 60vh;
  min-width: 500px;
  padding: 20px;
  box-shadow: -31px -31px 63px #0a0a18, 31px 31px 63px #0e0e20;

  .title-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin-top: 20px;

    .title {
      font-size: 1.6rem;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 70px auto;

    .submit-button {
      margin-top: 40px;
      width: 300px;
      height: 50px;
      background-color: ${colors.secondBlue};
      color: ${colors.secondaryDark};
    }

    .input-container {
      margin-bottom: 20px;

      input {
        width: 300px;
        font-size: 1.1rem;
      }
    }
  }
`;
