import Image from 'next/image'

export default function DeputadoCard({ deputadoAtual = {} }) {

  return (
    <div style={{display: "inline", justifyContent: "center", width: "40%"}}>
      <Image
        src={deputadoAtual.urlFoto}
        width={80}
        height={100}
        alt={deputadoAtual.nome}
      />
    </div>
  );
}


