'use client';

import { useState } from 'react';
import styles from './page.module.css';

const MAZE_WIDTH = 8;
const MAZE_HEIGHT = 8;
const WALL_COUNT = 25;

const PATH = 0;
const WALL = 1;

const createInitialBoard = (): number[][] => {
  return Array.from({ length: MAZE_HEIGHT }, () => Array.from({ length: MAZE_WIDTH }, () => PATH));
};
export default function Home() {
  const [board, setBoard] = useState<number[][]>(createInitialBoard());

  const handleMakeMaze = () => {
    const newBoard = board.map((row) => [...row]);
    for (let i = 0; i < WALL_COUNT; i++) {
      const x = Math.floor(Math.random() * MAZE_WIDTH);
      const y = Math.floor(Math.random() * MAZE_HEIGHT);
      if ((x === 0 && y === 0) || (x === MAZE_WIDTH - 1 && y === MAZE_HEIGHT - 1)) {
        continue;
      }
      newBoard[y][x] = WALL;
    }
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((cellVer, x) => (
            <div
              className={styles.cell}
              key={`${x}-${y}`}
              style={{ background: cellVer === WALL ? '#000' : '#FFF' }}
            />
          )),
        )}
      </div>
      <button onClick={handleMakeMaze}>Make Maze</button>
    </div>
  );
}
