import styled from "styled-components";
import { colors } from "../../colors/colors";

export const SideBarWithContentStyled = styled.div`
  display: flex;
`;

export const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-right-style: solid;
  border-right-color: rgba(255, 255, 255, 0.3);
  border-right-width: 0.1px;
  width: 200px;
  height: 100vh;

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .sub-title {
    padding: 6px;
    gap: 5px;
    display: flex;
    align-items: center;
    font-size: 1.05rem;
    color: ${colors.secondBlue};
  }

  .selected {
    background-color: #d9d9d918;
    border-left-color: ${colors.secondBlue};
    border-left-style: solid;
    color: ${colors.secondBlue};
  }

  li {
    padding: 6px;
    cursor: pointer;
  }

  li:hover {
    background-color: #d9d9d918;
    border-left-color: ${colors.secondBlue};
    border-left-style: solid;
  }
`;
