import { faShoppingCart, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

function GameSummary({achievement, clickCount, level, handleShopModal}) {
  
  const handleAnimationEnd = (e) => {
    e.target.classList.remove('game-scale-inc');
  }

  const handleSave = () => {
    console.log('saved');
  }

  useEffect(() => {
    if(level > 0)
      document.getElementById('game-level').classList.add('game-scale-inc');
    
    document.getElementById('game-achivement').classList.add('game-scale-inc');
  }, [level, achievement])

  return (
    <>
      <div onAnimationEnd={handleAnimationEnd} id='game-achivement'>호칭: {achievement}</div>
      <div id='game-click-count'>개발력: {clickCount}</div>
      <div onAnimationEnd={handleAnimationEnd} id='game-level'>레벨: {level}</div>
      <FontAwesomeIcon onClick={handleShopModal} icon={faShoppingCart} />
      <FontAwesomeIcon onClick={handleSave} icon={faSave} />
    </>
  );
}

export default GameSummary;