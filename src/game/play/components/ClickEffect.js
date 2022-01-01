import React, { useEffect } from 'react';

function ClickEffect({x, y, count}) {

  const handleAnimationEnd = (e) => {
    e.target.classList.remove('game-click-effect');
    e.target.style.display = 'none';
  }

  useEffect(() => {
    const el = document.getElementById('game-click-effect');
    el.style.display = 'inline-block';
    el.classList.add('game-click-effect');
  });
  return (
    <>
      <div onAnimationEnd={handleAnimationEnd} style={{display:'none', position:'absolute', left:`${x+45}px`, top:`${y-60}px`}} id='game-click-effect' className='t-text game-click-effect'>+{count}</div>
    </>
  );
}

export default ClickEffect;