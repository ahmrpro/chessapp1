import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

export default function ChessGame() {
  const [game, setGame] = useState(new Chess());

  const handleDrop = (sourceSquare: string, targetSquare: string) => {
    let move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // automatically promote to a queen
    });
    if (move === null) return false; // illegal move
    setGame({ ...game });
    return true;
  };

  return (
    <div>
      <Chessboard position={game.fen()} onPieceDrop={handleDrop} />
    </div>
  );
}
