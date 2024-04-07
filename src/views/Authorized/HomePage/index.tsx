import { Header } from "../../../components/Header";
import { SideBar, SideBarFieldSelected } from "../../../components/SideBar";

export const HomePage = () => {
  return (
    <>
      <Header />
      <SideBar selected={SideBarFieldSelected.CHAT}>aaaaaaaaaaaaa</SideBar>
    </>
  );
};
