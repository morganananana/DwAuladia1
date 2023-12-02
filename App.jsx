import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
		oscar: true,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
		oscar: true,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
		oscar: true,
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
	{
    nome: 'Meninas Malvadas',
    oscar: false,
    lancamento: 2004,
    diretores: ['Mark Waters'],
    generos: ['Comédia'],
  }
];
function Filme ({nome, ano}) {
  return (<>
  <p>
    <span>{ano} - </span>
    <span>{nome}</span>
  </p>
  </>)
}
function App() {
  const[oscar, setOscar] = useState(true);

  const filmesFiltrados = filmes.filter(filme => filme.oscar === oscar);

  const estiloButton = (botao) => {
    if(botao === 'ganhador'){
      return {
      color: oscar ? 'purple' : 'pink',
    };
  }
    if(botao === 'perdedor'){
      return {
      color: oscar ? 'pink' : 'purple',
    };
  }
}
  
  const ClickGanhador = () => {
    setOscar(true);
  }
  const ClickPerdedor = () => {
    setOscar(false);
  }
  return (
    <>
      <h1>Oscar</h1>
      <div>
        <button onClick={ClickGanhador} style={estiloButton('ganhador')}>Ganhadores</button>
        <button onClick={ClickPerdedor} style={estiloButton('perdedor')}>Perdedores</button>
      </div>
      {
//        filmesFiltrados.map(filme => (<p>{filme.nome}</p>))
        filmesFiltrados.map(filme => <Filme nome={filme.nome} ano={filme.lancamento}/>)
      }
    </>
  )
}               

export default App
