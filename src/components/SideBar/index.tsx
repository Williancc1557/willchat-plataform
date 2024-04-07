import { IoChatbubbleEllipses } from "react-icons/io5";
import { SideBarStyled, SideBarWithContentStyled } from "./styled";

export class SideBarProperties {
  children: React.ReactNode;
}

export const SideBar = ({ children }: SideBarProperties) => {
  return (
    <>
      <SideBarWithContentStyled>
        <SideBarStyled>
          <ul>
            <li>Overview</li>
          </ul>
          <ul>
            <div className="sub-title">
              <IoChatbubbleEllipses className="icon" />
              <span>Management</span>
            </div>
            <li>Chat</li>
            <li>Chat Metrics</li>
          </ul>
        </SideBarStyled>
        {children}
      </SideBarWithContentStyled>
    </>
  );
};
