import React from 'react';


interface Deputado {
	urlFoto: string;
	ideCadastro: string;
	nome: string;
	nomeParlamentar: string;
}

interface RadioButtonsProps {
  opcoes: Deputado[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioButtons({ opcoes, onChange }: RadioButtonsProps) {
  return (
    <>
      {opcoes.map(opcao => (
      <div key={opcao.ideCadastro}>
        <label className="radio-option">
          <input
            type="radio"
            name="opcao"
            value={opcao.ideCadastro}
            onChange={onChange}
          />
          {opcao.nomeParlamentar}
        </label>
      </div>
      ))}
    </>
  );
}

export default RadioButtons;