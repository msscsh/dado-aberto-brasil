"use client"
import React, { useState, useEffect } from 'react';
import DeputadoCard from '../(componentes)/deputado-card';
import RadioButtons from '../(componentes)/radiobutton';

export default function MinhaTela() {
  const [deputados, setDeputados] = useState(null);
  const [deputadoAtual, setDeputadoAtual] = useState(null);
  const [deputadoQuiz1, setDeputadoQuiz1] = useState(null);
  const [deputadoQuiz2, setDeputadoQuiz2] = useState(null);
  const [deputadoQuiz3, setDeputadoQuiz3] = useState(null);
  const [deputadosDoQuiz, setDeputadosDoQuiz] = useState(null);
  const [deputadoSelecionado, setDeputadoSelecionado] = useState(null);
  const [mensagemAoUsuario, setMensagemAoUsuario] = useState(null);

  useEffect(() => {
	// Fazer requisição para buscar os dados
	fetch('/list_deputados.json')
	.then(response => response.json())
	.then(deputados => {
		localStorage.setItem('deputados', JSON.stringify(deputados));
		setDeputados(embaralharArray(deputados));

		const idesDe4DeputadosRandom = deputados.slice(0, 4).map(deputado => deputado.ideCadastro);
		setDeputadoAtual(deputados.find(deputado => deputado.ideCadastro === idesDe4DeputadosRandom[0]));
		setDeputadoQuiz1(deputados.find(deputado => deputado.ideCadastro === idesDe4DeputadosRandom[1]));
		setDeputadoQuiz2(deputados.find(deputado => deputado.ideCadastro === idesDe4DeputadosRandom[2]));
		setDeputadoQuiz3(deputados.find(deputado => deputado.ideCadastro === idesDe4DeputadosRandom[3]));
		
	});

  }, []);

  //um shuffle com o algoritmo do Fisher
	function embaralharArray(deputadosParaEmbaralhar) {
		for (let i = deputadosParaEmbaralhar.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[deputadosParaEmbaralhar[i], deputadosParaEmbaralhar[j]] = [deputadosParaEmbaralhar[j], deputadosParaEmbaralhar[i]];
		}
		return deputadosParaEmbaralhar;
	}

	function handleDaSelecao(e: React.ChangeEvent<HTMLInputElement>) {
		setDeputadoSelecionado(deputados.find(deputado => deputado.ideCadastro === e.target.value));



	}

	if (deputadoAtual && !deputadoSelecionado) {
		return (
			<div>
				<div style={{width: "80%"}}>
					<DeputadoCard deputado={deputadoAtual} />
				</div>
				<div style={{width: "100%"}}>
					<RadioButtons opcoes={embaralharArray([deputadoAtual, deputadoQuiz1, deputadoQuiz2, deputadoQuiz3])} onChange={handleDaSelecao} />
				</div>
			</div>
		);
	}
	else if (deputadoAtual && deputadoSelecionado && deputadoAtual.ideCadastro === deputadoSelecionado.ideCadastro) {
		return (
			<div>
				<div style={{width: "100%"}}>
					acertou
				</div>
			</div>
		);
	}
	else {
		return (
			<div>
				<div style={{width: "100%"}}>
					errou
				</div>
			</div>
		);
	}
}