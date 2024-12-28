interface Deputado {
  urlFoto: string;
  nome: string;
}

interface DeputadoCardProps {
  deputado: Deputado;
}

export default function DeputadoCard({ deputado }: DeputadoCardProps) {

  return (
    <div style={{display: "inline", justifyContent: "center", width: "100%"}}>
      <img src={deputado.urlFoto} alt={deputado.nome}></img>
    </div>
  );
}


