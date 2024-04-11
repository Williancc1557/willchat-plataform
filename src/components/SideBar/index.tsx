import { IoChatbubbleEllipses } from "react-icons/io5";
import { SideBarStyled, SideBarWithContentStyled } from "./styled";

// eslint-disable-next-line react-refresh/only-export-components
export enum SideBarFieldSelected {
  OVERVIEW,
  CHAT,
  CHAT_METRICS,
}

export interface SideBarProperties {
  selected: SideBarFieldSelected;
}

export const SideBar = ({ selected }: SideBarProperties) => {
  return (
    <>
      <SideBarWithContentStyled>
        <SideBarStyled>
          <ul>
            <li
              className={
                selected == SideBarFieldSelected.OVERVIEW ? "selected" : ""
              }
            >
              Overview
            </li>
          </ul>
          <ul>
            <div className="sub-title">
              <IoChatbubbleEllipses className="icon" />
              <span>Management</span>
            </div>
            <li
              className={
                selected == SideBarFieldSelected.CHAT ? "selected" : ""
              }
            >
              Chat
            </li>
            <li
              className={
                selected == SideBarFieldSelected.CHAT_METRICS ? "selected" : ""
              }
            >
              Chat Metrics
            </li>
          </ul>
        </SideBarStyled>
      </SideBarWithContentStyled>
    </>
  );
};
