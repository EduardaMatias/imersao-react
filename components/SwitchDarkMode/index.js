import * as S from "./styles";
import { useContext } from "react";
import { ColorModeContext } from "./ColorMode";

function SwitchDarkMode() {
  const contexto = useContext(ColorModeContext);

  return (
    <S.StyledSwitch>
      <input
        id="darkmode"
        type="checkbox"
        onChange={() => {
          contexto.toggleMode();
        }}
      />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </S.StyledSwitch>
  );
}

export default SwitchDarkMode;
