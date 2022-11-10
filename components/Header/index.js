import config from "../../config.json";
import * as S from "./styles";

function Header() {
  return (
    <S.Container>
      <section className="banner">
        <img src={config.banner} />{" "}
      </section>{" "}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />{" "}
        <div>
          <h1> {config.name} </h1> <p> {config.job} </p>{" "}
        </div>{" "}
      </section>{" "}
    </S.Container>
  );
}

export default Header;
