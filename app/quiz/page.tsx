"use client"
import { useState } from 'react';
import RadioButtons from '@/app/(componentes)/radiobutton';

export default function Counter() {
  
  const [deputadoSelecionado, setDeputadoSelecionado] = useState(null);

//   const file = await fs.readFile(process.cwd() + '/public/list_deputados.json', 'utf8');
//   let data = JSON.parse(file);
let data = [
	{ ideCadastro: 1, nome: 'A' },
	{ ideCadastro: 2, nome: 'B' },
	{ ideCadastro: 3, nome: 'C' },
	{ ideCadastro: 4, nome: 'D' },
	];

  let idesDe4DeputadosRandom = [];
  let deputadoAtual = {};
  let deputadoQuiz1 = {};
  let deputadoQuiz2 = {};
  let deputadoQuiz3 = {};

  function handleDaSelecao(e: React.ChangeEvent<HTMLInputElement>) {
	setDeputadoSelecionado(e.target.value);
}

  return (
	<div className="flex gap-4 items-center flex-col sm:flex-row">
		{/* <DeputadoCard deputadoAtual={deputadoAtual} /> */}
		<RadioButtons opcoes={data} onChange={handleDaSelecao} />
		<p>{deputadoSelecionado}</p>
	</div>
);
}
