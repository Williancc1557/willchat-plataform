import { Header } from "../../../components/Header";
import { SideBar, SideBarFieldSelected } from "../../../components/SideBar";
import { HomePageContainerStyled, HomePageStyled } from "./styled";

export const HomePage = () => {
  return (
    <HomePageContainerStyled>
      <Header />
      <SideBar selected={SideBarFieldSelected.CHAT}>
        <HomePageStyled>
          <p>aaaaaaaa</p>
        </HomePageStyled>
      </SideBar>
    </HomePageContainerStyled>
  );
};
