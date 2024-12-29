"use client"
import React, { useState, useEffect } from 'react';
import DeputadoCard from '../(componentes)/deputado-card';
import RadioButtons from '../(componentes)/radiobutton';

interface Deputado {
	urlFoto: string;
	ideCadastro: string;
	nome: string;
	nomeParlamentar: string;
	partido: string;
}

export default function MinhaTela() {
  const [deputados, setDeputados] = useState<Deputado[]>([]);
  const [deputadoAtual, setDeputadoAtual] = useState<Deputado | null | undefined>(null);
  const [deputadoQuiz1, setDeputadoQuiz1] = useState<Deputado | null | undefined>(null);
  const [deputadoQuiz2, setDeputadoQuiz2] = useState<Deputado | null | undefined>(null);
  const [deputadoQuiz3, setDeputadoQuiz3] = useState<Deputado | null | undefined>(null);
  const [deputadoSelecionado, setDeputadoSelecionado] = useState<Deputado | null | undefined>(null);
  const [deputadosEmbaralhados, setDeputadosEmbaralhados] = useState<Deputado[]>([]);

  useEffect(() => { init(null); }, []);

	function init(deputados: Deputado[] | null) {

		if (!deputados) {
			fetch('/dado-aberto-brasil/list_deputados.json')
			.then(response => response.json())
			.then( (deputados: Deputado[]) => {
				setDeputados(embaralharArray(deputados));
				init(deputados);
			});
		}
		else {
			const idesDe4DeputadosRandom = deputados.slice(0, 4).map(deputado => deputado.ideCadastro);
			setDeputadoAtual(deputados.find(deputado => deputado.ideCadastro === idesDe4DeputadosRandom[0]));
			setDeputadoQuiz1(deputados.find(deputado => deputado.ideCadastro === idesDe4DeputadosRandom[1]));
			setDeputadoQuiz2(deputados.find(deputado => deputado.ideCadastro === idesDe4DeputadosRandom[2]));
			setDeputadoQuiz3(deputados.find(deputado => deputado.ideCadastro === idesDe4DeputadosRandom[3]));
			setDeputadoSelecionado(null)
			setDeputadosEmbaralhados(embaralharArray([deputadoAtual, deputadoQuiz1, deputadoQuiz2, deputadoQuiz3].filter((deputado) => deputado !== null && deputado !== undefined)));
		}
	}
	
  	//um shuffle com o algoritmo do Fisher
	function embaralharArray(deputadosParaEmbaralhar: Deputado[]) {
		if(deputadosEmbaralhados) {
			for (let i = deputadosParaEmbaralhar.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[deputadosParaEmbaralhar[i], deputadosParaEmbaralhar[j]] = [deputadosParaEmbaralhar[j], deputadosParaEmbaralhar[i]];
			}
			return deputadosParaEmbaralhar;
		}
		else {
			return deputadosParaEmbaralhar;
		}
	}

	function handleDaSelecao(e: React.ChangeEvent<HTMLInputElement>) {
		setDeputadoSelecionado(deputados.find(deputado => deputado.ideCadastro === e.target.value));
	}

	function replay() {
		init(null);
	}

	if (deputadoAtual && !deputadoSelecionado) {
		return (
			<div>
				<div style={{width: "80%"}}>
					<DeputadoCard deputado={deputadoAtual} />
				</div>
				<div style={{width: "100%"}}>
					<RadioButtons opcoes={embaralharArray([deputadoAtual, deputadoQuiz1, deputadoQuiz2, deputadoQuiz3].filter((deputado) => deputado !== null && deputado !== undefined))} onChange={handleDaSelecao} />
				</div>
			</div>
		);
	}
	else if (deputadoAtual && deputadoSelecionado && deputadoAtual.ideCadastro === deputadoSelecionado.ideCadastro) {
		return (
			<div>
				<div style={{width: "80%"}}>
					<DeputadoCard deputado={deputadoAtual} />
				</div>
				<div>
					<p>Acertou! O nome do deputado é {deputadoAtual.nome} do partido {deputadoAtual.partido}</p>

					<button
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#29bb8b] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
						onClick={replay}>
						Mais uma vez
					</button>
				</div>
			</div>
		);
	}
	else if (deputadoAtual && deputadoSelecionado) {
		return (
			<div>
				<div style={{width: "80%"}}>
					<DeputadoCard deputado={deputadoAtual} />
				</div>
				<div>
					<p>Errou! O nome correto do deputado é {deputadoAtual.nome}</p>
					<button
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#29bb8b] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
						onClick={replay}>
						Tente novamente
					</button>
				</div>
			</div>
		);
	}
	else {
	}
}