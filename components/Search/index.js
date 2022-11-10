import * as S from "./styles";

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;

  return (
    <S.StyledSearch>
      <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
      <button>🔎</button>
    </S.StyledSearch>
  );
}
