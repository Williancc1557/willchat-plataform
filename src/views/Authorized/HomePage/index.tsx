import { FaPlus } from "react-icons/fa";
import { Header } from "../../../components/Header";
import { SideBar, SideBarFieldSelected } from "../../../components/SideBar";
import { HomePageContainerStyled, HomePageStyled } from "./styled";
import { Card, CardProps } from "../../../components/Card";

export const HomePage = () => {
  const chatList: Array<CardProps> = [
    {
      chatId: "123",
      date: "15/10/2004",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip occ tempor inv sapiente temp null hypothesis consectetur adip non proident null hypothesis",
      imageUrl: "fake-image.png",
      title: "Lorem ipsum dolor",
      totalMessage: 10,
    },
  ];
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
          <div className="card-container">
            {chatList.map((chat) => (
              <Card {...chat}></Card>
            ))}
          </div>
        </HomePageStyled>
      </SideBar>
    </HomePageContainerStyled>
  );
};
