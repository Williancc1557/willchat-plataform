import { useNavigate } from "react-router-dom";
import {
  ButtonStyled,
  HeaderStyled,
  LiStyled,
  SignInLinkStyled,
  UlStyled,
} from "./styled";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <div className="left-side">
        <h1 className="title">
          <a href="/">WillChat</a>
        </h1>
        <UlStyled className="list">
          <LiStyled>
            <a href="/">Home</a>
          </LiStyled>
          <LiStyled>
            <a href="/docs">Docs</a>
          </LiStyled>
          <LiStyled>
            <a href="/support">Support</a>
          </LiStyled>
        </UlStyled>
      </div>

      <div className="right-side">
        <UlStyled className="buttons-list">
          <li>
            <SignInLinkStyled onClick={() => navigate("/login")}>
              Sign In
            </SignInLinkStyled>
          </li>

          <li>
            <ButtonStyled onClick={() => navigate("/register")}>
              Try Free
            </ButtonStyled>
          </li>
        </UlStyled>
      </div>
    </HeaderStyled>
  );
};
