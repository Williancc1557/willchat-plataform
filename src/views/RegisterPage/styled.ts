import { styled } from "styled-components";
import { colors } from "../../colors/colors";

export const HeaderStyled = styled.header`
  display: flex;
  height: 15vh;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.fontColor};
  font-size: 1rem;
  background-color: ${colors.primaryDark};
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.3);
`;

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
  background-color: ${colors.secondBlue};
  border-radius: 30px;
  min-height: 60vh;
  min-width: 400px;
  padding: 20px;
`;
