import { FaPlus } from "react-icons/fa";
import { Header } from "../../../components/Header";
import { SideBar, SideBarFieldSelected } from "../../../components/SideBar";
import { HomePageContainerStyled, HomePageStyled } from "./styled";

export const HomePage = () => {
  return (
    <HomePageContainerStyled>
      <Header />
      <SideBar selected={SideBarFieldSelected.CHAT}>
        <HomePageStyled>
          <div className="actions-container">
            <span className="title">Chats</span>
            <button className="create-button">
              <FaPlus />
              <span>Create New Chat</span>
            </button>
          </div>
          <p>aaaaaaaa</p>
        </HomePageStyled>
      </SideBar>
    </HomePageContainerStyled>
  );
};
