import styled from "styled-components";
import { colors } from "../../../colors/colors";

export const HomePageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HomePageStyled = styled.div`
  width: 100%;

  .actions-container {
    height: 80px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .title {
      margin-left: 20px;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .create-button {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 50px;
      margin-right: 20px;
      background-color: ${colors.secondBlue};
      color: black;
    }
  }

  p {
    height: 70vh;
  }
`;
