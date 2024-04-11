import styled from "styled-components";
import { colors } from "../../../colors/colors";

export const HomePageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HomePageStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;

  .actions-container {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .create-button {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 50px;
      background-color: ${colors.secondBlue};
      color: black;
    }
  }

  .card-container {
    width: 100%;
  }
`;
