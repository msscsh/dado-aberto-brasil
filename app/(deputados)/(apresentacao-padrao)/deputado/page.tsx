import { promises as fs } from 'fs';
import Image from 'next/image'

export default async function MyComponent() {

    const file = await fs.readFile(process.cwd() + '/public/list_deputados.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <div>
            {data.map((item) => (
                  <div key={item.ideCadastro}>
                    <Image
                      src={item.urlFoto}
                      width={80}
                      height={100}
                      alt={item.nome}
                    />
                    <p key={item.ideCadastro}>{item.nome}</p>
                  </div>
            ))}
        </div>
    );
}


