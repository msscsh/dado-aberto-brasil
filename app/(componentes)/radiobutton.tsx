import React from 'react';

function RadioButtons({ opcoes, onChange }) {
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
          {opcao.nome}
        </label>
      </div>
      ))}
    </>
  );
}

export default RadioButtons;