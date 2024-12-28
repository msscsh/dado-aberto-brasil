import { promises as fs } from 'fs';
import DeputadoCard from './deputado/page';

export default async function LayoutParaCardDeputado({children,}: { children: React.ReactNode; }) {

    const file = await fs.readFile(process.cwd() + '/public/list_deputados.json', 'utf8');
    const data = JSON.parse(file);
    
    const ideCadastroDoDeputadoAtual = "73701";
    const deputadoAtual = data.find(deputado => deputado.ideCadastro === ideCadastroDoDeputadoAtual);

	return (
		<main>
			<DeputadoCard deputadoAtual={deputadoAtual} />
		</main>
		);
}