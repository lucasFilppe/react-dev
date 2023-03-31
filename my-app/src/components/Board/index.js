import Square from "../Square";
import '../Board/styles.css'
import { useState } from "react";

export default function Board() {
  /*Para coletar dados de vários filhos ou para que dois componentes filhos se 
  comuniquem, declare o estado compartilhado em seu componente pai. 
  O componente pai pode passar esse estado de volta para os filhos por 
  meio de props. Isso mantém os componentes filhos sincronizados entre 
  si e com seus pais. */
  const  [squares, setSquares] = useState(Array(9).fill(null));//Array(9).fill(null)cria uma matriz com nove elementos e define cada um deles como null

  //estado para movimento do jogo
  const [xIsNext, setXIsNext] = useState(true);

  //mostrando jogadas e o vencedor
  const winner = calculateWinner(squares)
  let status;
  if(winner){
    status = "Winner " + winner;
  }
  else{
    status = "New player " + (xIsNext ? "X": "O")
  }

  //função que declara um vencedor
  function calculateWinner(){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
      }
    }
    return null;
  }

  

  //função que atualiza quadrado
  function handleClick(i){

    if(squares[i] || calculateWinner(squares)){
      return
    }

    const nextSquares = squares.slice();

    if(xIsNext){
      nextSquares[i] = "X"
    }
    else{
      nextSquares[i] = "O"
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>

    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>

    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
     
    </>
  );
}
