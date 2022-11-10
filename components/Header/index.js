import config from "../../config.json";
import * as S from "./styles";

function Header() {
  return (
    <S.Container>
      <section className="user-info">
        <img src="banner" />
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h1> {config.nome} </h1>
          <p> {config.job} </p>
        </div>
      </section>
    </S.Container>
  );
}

export default Header;
