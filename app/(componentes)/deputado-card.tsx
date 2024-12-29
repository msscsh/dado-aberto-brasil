import Image from 'next/image';
import '@/app/quiz/estilo.css';

interface Deputado {
  urlFoto: string;
  ideCadastro: string;
  nome: string;
}

interface DeputadoCardProps {
  deputado: Deputado;
}

export default function DeputadoCard({ deputado }: DeputadoCardProps) {

  return (
    <div className="divImagem" style={{display: "inline", justifyContent: "center", width: "100%"}}>
      <Image
          src={'/dado-aberto-brasil/deputados/'+deputado.ideCadastro+'.jpg'}
          alt={`Imagem ${deputado.nome}`}
          width={550} // Largura inicial, pode ser ajustada
          height={420} // Altura inicial, pode ser ajustada
          objectFit="fill"
        />
    </div>
  );
}


