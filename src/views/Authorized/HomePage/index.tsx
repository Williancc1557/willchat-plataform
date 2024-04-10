import { Header } from "../../../components/Header";
import { SideBar, SideBarFieldSelected } from "../../../components/SideBar";
import { HomePageStyled } from "./styled";

export const HomePage = () => {
  return (
    <>
      <Header />
      <SideBar selected={SideBarFieldSelected.CHAT}>
        <HomePageStyled>
          <p>aaaaaaa</p>
        </HomePageStyled>
      </SideBar>
    </>
  );
};
