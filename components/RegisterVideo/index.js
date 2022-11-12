import * as S from "./styles";
import { useState } from "react";

function useForm(props) {
  const [fieldValues, setFieldValues] = useState(props.initialValues);
  return {
    fieldValues,
    handleChange: (e) => {
      const name = e.target.name;
      setFieldValues({
        ...fieldValues,
        [name]: e.target.value,
      });
    },
    clearForm() {
      setFieldValues({});
    },
  };
}

function RegisterVideo() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const formCadastro = useForm({
    initialValues: { titulo: "", url: "" },
  });

  return (
    <S.StyledRegisterVideo>
      <button className="add-video" onClick={() => setIsOpenModal(true)}>
        +
      </button>
      {isOpenModal && (
        <form
          onSubmit={(e) => {
            console.log(formCadastro.fieldValues);
            e.preventDefault();
            setIsOpenModal(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button type="button" className="close-modal" onClick={() => setIsOpenModal(false)}>
              X
            </button>
            <input placeholder="Título do vídeo" name="titulo" value={formCadastro.fieldValues.titulo} onChange={formCadastro.handleChange} />
            <input placeholder="URL" name="url" value={formCadastro.fieldValues.url} onChange={formCadastro.handleChange} />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </S.StyledRegisterVideo>
  );
}

export default RegisterVideo;
