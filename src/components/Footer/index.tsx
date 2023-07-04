import { list } from "./elements";
import { FooterStyled, UlStyled } from "./styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="contents">
        <div className="lists">
          {list.map((el, index) => (
            <UlStyled key={index}>
              <p className="title">{el.title}</p>
              {el.items.map((item, indexItem) => (
                <li key={indexItem}>
                  <a href="">{item.title}</a>
                </li>
              ))}
            </UlStyled>
          ))}
        </div>

        <div className="copyright">Copyright &#169; 2023 WillChat</div>
      </div>
    </FooterStyled>
  );
};
