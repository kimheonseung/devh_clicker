import React from 'react';
import { useEffect, useRef } from 'react';
import Grid from '@toast-ui/react-grid';
import TuiGrid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import './GameUpgradeStore.css';

function GameUpgradeStore({modal, handleShopModal}) {

  const gridRef = useRef();

  TuiGrid.applyTheme('default', {
    row: {
      odd: {
        background: '#363636',
        text: '#aaa',
      },
      even: {
          background: '#2f2f2f',
          text: '#aaa',
      },
      hover: {
          background: 'darkslateblue',
      }
    },
    cell: {
      header: {
        background: '#2C2C2C',
        text: '#ccc',
        showHorizontalBorder: true,
        showVerticalBorder: true,
        border: '#404040'
      },
      normal: {
          text: '#ccc',
          showHorizontalBorder: true,
          showVerticalBorder: true,
          border: '#404040'
      },
    }
  }); 

  const gridOption = {
    width: 'auto',
    rowHeight: 30,
    columnOptions: {
      resizable: true
    },
    scrollX: false,
    scrollY: true,
    // rowHeaders: ['checkbox'],
    bodyHeight: 'auto',
  }

  const columns = [
    {
      header: 'col1',
      name: 'col1',
      align: 'center',
      hidden: true
    },
    {
      header: 'col2',
      name: 'col2',
      align: 'center',
      hidden: true
    },
    {
      header: 'col3',
      name: 'col3',
      align: 'center'
    },
    {
      header: 'col4',
      name: 'col4',
      align: 'center'
    }
  ];

  const data = [
    {
      col1: "11",
      col2: "12",
      col3: "13",
      col4: "14",
    },
    {
      col1: "21",
      col2: "22",
      col3: "23",
      col4: "24",
    },
    {
      col1: "31",
      col2: "32",
      col3: "33",
      col4: "34",
    },
  ]
 
  
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [modal]);

  return (
    <>
      <div className={modal ? "modal-game-upgrade-store" : "modal-game-upgrade-store hidden"}>
        <div className="modal">
          <div className="modal-content-wrap">
            <div className="grid-wrap t-grid">
              <Grid
                ref={gridRef}
                width={gridOption.width} 
                rowHeight={gridOption.rowHeight} 
                bodyHeight={gridOption.bodyHeight}
                columnOptions={gridOption.columnOptions} 
                rowHeaders={gridOption.rowHeaders}
                scrollX={gridOption.scrollX} 
                scrollY={gridOption.scrollY}
                columns={columns}
                data={data}
              />
            </div>
          </div>
          <div className="modal-button-wrap">
						<button onClick={handleShopModal} className="btn btn-secondary" id="modal-confirm">확인</button>
					</div>
        </div>
      </div>
    </>
  );
}
  
export default GameUpgradeStore;