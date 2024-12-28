import React from 'react';

function RadioButtons({ opcoes, onChange }) {
  return (
    <div>
      {opcoes.map(opcao => (
        <label key={opcao.ideCadastro} className="radio-option">
          <input
            type="radio"
            name="opcao"
            value={opcao.ideCadastro}
            onChange={onChange}
          />
          {opcao.nome}
        </label>
      ))}
    </div>
  );
}

export default RadioButtons;