import { styled } from "styled-components";

export const InputStyled = styled.div`
  .group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 300px;

    .eye-icon-container {
      padding: 0;
      .eye-icon {
        position: absolute;
        right: 1rem;
        width: 1.4rem;
        height: 1.4rem;
        fill: #9e9ea7;
        top: 12px;
        cursor: pointer;
      }
    }
  }

  .input {
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: 0.3s ease;
  }

  .input::placeholder {
    color: #9e9ea7;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .icon {
    position: absolute;
    left: 1rem;
    fill: #9e9ea7;
    width: 1.2rem;
    height: 1.2rem;
  }
`;
