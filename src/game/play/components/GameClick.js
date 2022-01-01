import React from 'react';

function GameClick({handleClick}) {
  return (
    <>
      {/* <canvas id='canvas-click' onClick={handleClick} className='game game-click' /> */}
      <div className="div-click game game-click" onClick={handleClick} />
    </>
  );
}

export default GameClick;