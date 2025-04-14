import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const { board, handleClick, getStatusMessage, resetGame } =
    useTicTacToe();
  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>

        <div className="game">
          <div className="status">
            {getStatusMessage()}
            <button className="reset-button" onClick={resetGame}>
              Reset Game
            </button>
          </div>

          <div className="board">
            {board.map((b, index) => {
              return (
                <button
                  className="cell"
                  key={index}
                  onClick={() => handleClick(index)}
                  disabled={b!==null}
                >
                  {b}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
