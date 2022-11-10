import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Timeline from "../../components/Timeline";
import config from "../../config.json";
import { CSSReset } from "../../styles/globals";
import { useState } from "react";
import Head from "next/head";

const initialValue = "";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState(initialValue);
  return (
    <>
      <Head>
        <title> AluraTube </title>{" "}
      </Head>{" "}
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} /> <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />{" "}
      </div>{" "}
    </>
  );
}

export default HomePage;
