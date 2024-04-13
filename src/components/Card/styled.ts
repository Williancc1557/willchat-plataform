import styled from "styled-components";
import { colors } from "../../colors/colors";

export const CardStyled = styled.div`
  width: 260px;
  height: 395px;
  margin: 20px;
  border-radius: 5px;
  background-color: ${colors.secondaryDark};
  display: flex;
  flex-direction: column;
  .card-header {
    .card-header-image {
      img {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 100%;
        height: 150px;
      }
    }
  }
  .card-body {
    .card-body-date {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 0;
      font-size: 0.7rem;
      color: #e90808;
    }
    .card-body-title {
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .card-body-description {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 0.9rem;
    }
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin-top: 20px;

    div {
      display: flex;
      flex-direction: column;
      width: 49%;
      align-items: center;
      justify-content: center;
      background-color: ${colors.secondBlue};
      color: #373737;

      .title {
        font-size: 0.7rem;
      }

      .field {
        font-size: 0.8rem;
      }

      .field,
      .title {
        display: flex;
        width: 100%;
        font-weight: bold;
      }
    }

    .card-footer-total-messages {
      border-bottom-left-radius: 10px;
    }

    .card-footer-chat-id {
      border-bottom-right-radius: 10px;
    }
  }
`;
