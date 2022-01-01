import React from 'react';
import Layout from 'layout/Layout';
import './GamePlayPage.css';
import { useEffect } from 'react';
import { useState } from 'react';
import GameUpgradeStore from 'game/play/components/GameUpgradeStore';
import GameLog from 'game/play/components/GameLog';
import GameClick from 'game/play/components/GameClick';
import ClickEffect from 'game/play/components/ClickEffect';
import GameSummary from 'game/play/components/GameSummary';

function GamePage() {
  
  const [clickCount, setClickCount] = useState(0);
  const [level, setLevel] = useState(0);
  const [log, setLog] = useState('게임 시작 !');
  const [countPerClick, setCountPerClick] = useState(1); // 한번의 클릭당 오르는 횟수
  const [clickWeight, setClickWeight] = useState(1); // 클릭 배수
  const [clickBonus, setClickBonus] = useState(0); // 클릭 추가 횟수
  const [achievement, setAchievement] = useState('Newbie');
  const [codeStyle, setCodeStyle] = useState('String str = "I am Newbie";');
  const [shopModal, setShopModal] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleShopModal = () => {
    setShopModal(!shopModal);
  }

  const handleUpgrade = () => {
    setClickWeight(1);
    setClickBonus(0);
    setAchievement('Newbie');
    const newCountPerClick = (countPerClick + clickBonus) * clickWeight;
    setCountPerClick(newCountPerClick);
  }

  const handleClick = (e) => {
    const newClickCount = clickCount + countPerClick;
    setClickCount(newClickCount);

    const level = (newClickCount/10);
    if(level % 5 === 0) {
      setCodeStyle('String str = "I am Little Newbie";');
      setLog(log+'\n레벨 업 ! ['+level+']\n호칭 변경 [Little Newbie]');
    } else {
      if(newClickCount % 10 === 0) {
        setCodeStyle(codeStyle + '\nint level_'+level+' ='+level+';');
        setLog(log+'\n레벨 업 ! ['+level+']');
        setLevel(level);
      }  
    }
    clickEffect(e);
  }

  const clickEffect = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  }

  // const drawClickCanvas = () => {
  //   const lineHeight = 20;
  //   const canvas = document.getElementById('canvas-click');
  //   canvas.width = 400;
  //   canvas.height = 200;

  //   const ctx = canvas.getContext('2d');
  //   ctx.font = lineHeight+'px sans-serif';

  //   const lines = codeStyle.split('\n');

  //   const textWidth = ctx.measureText(codeStyle).width;
  //   for(let i = 0 ; i < lines.length ; ++i) {
  //     // ctx.fillText(lines[i], (canvas.width / 2) - (textWidth / 2), 100 + (i*lineHeight));
  //     ctx.fillText(lines[i], 20, 50 + (i*lineHeight));
  //   }
  // }

  // const scrollLogToBottom = () => {
  //   const ta = document.getElementById('game-log');
  //   ta.scrollTop = ta.scrollHeight;
  // }
  
  useEffect(() => {
    // drawClickCanvas();  
  }, [codeStyle]);

  return (
    <>
      <Layout>
        <ClickEffect x={x} y={y} count={countPerClick} />
        <div className='t-text game game-wrap'>
          <div className='game-summary'>
            <GameSummary achievement={achievement} clickCount={clickCount} level={level} handleShopModal={handleShopModal} />
          </div>
          <div className='game game-body'>
            <div className='game game-body-main'>
              <GameClick handleClick={handleClick} />
            </div>
            <div className='game game-body-log'>
              <GameLog log={log} />
            </div>
          </div>
        </div>
        <GameUpgradeStore modal={shopModal} handleShopModal={handleShopModal} />
      </Layout>
    </>
  );
}
  
export default GamePage;