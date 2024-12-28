import Image from 'next/image'

export default function DeputadoCard({ deputado = {} }) {

  return (
    <div style={{display: "inline", justifyContent: "center", width: "40%"}}>
      <Image
        src={deputado.urlFoto}
        width={80}
        height={100}
        alt={deputado.nome}
      />
    </div>
  );
}


