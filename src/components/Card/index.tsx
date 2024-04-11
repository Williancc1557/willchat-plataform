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
          <img className="image" src="" />
        </div>
      </div>
      <div className="card-body">
        <div className="card-body-date">{props.date}</div>
        <div className="card-body-title">{props.title}</div>
        <p className="card-body-description">{props.description}</p>
      </div>
      <div className="card-footer">
        <div className="card-footer-total-messages">{props.totalMessage}</div>
        <div className="card-footer-chat-id">{props.chatId}</div>
      </div>
    </CardStyled>
  );
};
