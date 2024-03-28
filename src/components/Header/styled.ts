import { styled } from "styled-components";
import { colors } from "../../colors/colors";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  background-color: ${colors.primaryDark};
  height: 8vh;
  color: ${colors.fontColor};
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.3);
  justify-content: space-between;
  transition: 0.4s;

  .left-side {
    display: flex;
    gap: 30px;
    height: 100%;
    margin-left: 15px;

    .title {
      display: flex;
      font-size: 2rem;
      align-items: center;
      text-transform: uppercase;
    }
  }

  .right-side {
    margin-right: 15px;
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1rem;
`;

export const LiStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  width: 100px;
  position: relative;
  transition: 0.3s;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.secondBlue};
    transition: 0.5s;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${colors.secondBlue};
  }
`;

export const SignInLinkStyled = styled.a`
  margin-right: 30px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    color: ${colors.secondBlue};
  }
`;

export const ButtonStyled = styled.button`
  padding: 16px 32px;
  background-color: ${colors.secondBlue};
  color: ${colors.primaryDark};
  transition: 0.4s;

  &:hover {
    border-radius: 40px;
  }
`;
