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
          {opcao.nomeParlamentar}
        </label>
      </div>
      ))}
    </>
  );
}

export default RadioButtons;