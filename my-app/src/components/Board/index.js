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



  return (
    <>
    <div className="board-row">
      <Square value={squares[0]} />
      <Square value={squares[1]}/>
      <Square value={squares[2]}/>
    </div>

    <div className="board-row">
      <Square value={squares[3]}/>
      <Square value={squares[4]}/>
      <Square value={squares[5]}/>
    </div>

    <div className="board-row">
      <Square value={squares[6]}/>
      <Square value={squares[7]}/>
      <Square value={squares[8]}/>
    </div>
     
    </>
  );
}
