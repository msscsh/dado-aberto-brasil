export default function DeputadoCard({ deputado = {} }) {

  return (
    <div style={{display: "inline", justifyContent: "center", width: "100%"}}>
      <img src={deputado.urlFoto} alt={deputado.nome}></img>
    </div>
  );
}


