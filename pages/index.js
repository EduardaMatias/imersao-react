import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";
import config from "../config.json";
import { CSSReset } from "../globals";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />{" "}
      </div>
    </>
  );
}

export default HomePage;
