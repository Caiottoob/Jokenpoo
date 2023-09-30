import React, { useState } from 'react';
import styles from "./App.css";
import Tesoura from "./Escolha/Tesoura.png"
import Pedra from "./Escolha/Stone.png"
import Papel from "./Escolha/Papel.png"
const opcoes = ["Pedra","Papel", "Tesoura"];

function App() {
  const [jogador, setJogador] = useState('');
  const [computador, setComputador] = useState('');
  const [resultado, setResultado] = useState('');
  const [pontosJogador, setPontosJogador] = useState(0);
  const [pontosComputador, setPontosComputador] = useState(0);

  const jogar = (escolha) => {
    const escolhaAleatoria = opcoes[Math.floor(Math.random() * opcoes.length)];
    setJogador(escolha);
    setComputador(escolhaAleatoria);

    if (escolha === escolhaAleatoria) {
      setResultado('Empate');
    } else if (
      escolha === "Pedra" && escolhaAleatoria === "Tesoura" || escolha === "Papel" && escolhaAleatoria === "Pedra" || escolha === "Tesoura" && escolhaAleatoria === "Papel"){
      setResultado('Jogador vence');
      setPontosJogador(pontosJogador + 1);
    } 
    else {
      setResultado('Computador vence');
      setPontosComputador(pontosComputador + 1);
    }
  };

  const reiniciarJogo = () => {
    setJogador('');
    setComputador('');
    setResultado('');
    setPontosComputador(0);
    setPontosJogador(0);
  };

  return (
    <div className="App">
      <nav>
          <p>Pedra <br></br>Papel ou <br></br>Tesoura</p>
          <div className="placar">
            <p>Jogador<br/>{pontosJogador}</p>
            <p>Computador<br/>{pontosComputador}</p>
          </div>
      </nav>
      
      <div className="opcoes">
        {opcoes.map((opcao) => (
          <button key={opcao} onClick={() => jogar(opcao)}>
           {opcao}
          </button>
        ))}
        <nav>
        {jogador && (
        <div className="resultado">
          <p>Jogador escolheu: {jogador}</p>
          <p>Computador escolheu: {computador}</p>
          <p>Resultado: {resultado}</p>
        </div>
      )}
      {jogador && (
        <button className="reiniciar" onClick={reiniciarJogo}>
          Jogar novamente
        </button>
      )}
      </nav>
      </div>
      
    </div>
  );
}

export default App;