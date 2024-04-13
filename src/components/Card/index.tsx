import { CardStyled } from "./styled";

export interface CardProps {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  totalMessage: number;
  chatId: string;
}

export const Card = (props: CardProps) => {
  return (
    <CardStyled>
      <div className="card-header">
        <div className="card-header-image">
          <img className="image" src="dark.jpg" />
        </div>
      </div>
      <div className="card-body">
        <div className="card-body-date">{props.date}</div>
        <div className="card-body-title">{props.title}</div>
        <p className="card-body-description">{props.description}</p>
      </div>
      <div className="card-footer">
        <div className="card-footer-total-messages">
          <div className="field">{props.totalMessage}</div>
          <div className="title">TOTAL MESSAGES</div>
        </div>
        <div className="card-footer-chat-id">
          <div className="field">{props.chatId}</div>
          <div className="title">CHAT ID</div>
        </div>
      </div>
    </CardStyled>
  );
};
