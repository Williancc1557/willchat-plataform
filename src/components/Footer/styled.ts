import { styled } from "styled-components";
import { colors } from "../../colors/colors";

export const FooterStyled = styled.footer`
  width: 100%;
  min-height: 20vh;
  color: ${colors.fontColor};
  background-color: ${colors.primaryDark};
  padding-top: 40px;
  padding-bottom: 20px;
  border-top: 1.5px solid rgba(255, 255, 255, 0.3);

  .contents {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .lists {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    @media (max-width: 730px) {
      .lists {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
    }
  }

  .copyright {
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;

export const UlStyled = styled.ul`
  .title {
    font-weight: bold;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      margin-top: 10px;
    }
  }
`;
