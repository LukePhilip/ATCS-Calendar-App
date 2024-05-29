import React, {useState, useRef} from "react";
import Day from "./Day";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import CanvasDraw from 'react-canvas-draw';

export default function Month({ month, eraseMode, canvasRef }) {

  // const Canvas = () => {
  //   return (
  //     <ReactSketchCanvas
  //       style={styles}
  //       ref={canvasRef}
  //       // width="600"
  //       // height="400"
  //       // eraseMode={eraseMode ? true : false}
  //       strokeWidth={3}
  //       strokeColor="blue"
  //     />
  //   );
  // }

  const styles = {}

  const handleClick = () => {
    
  }

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {/* <CanvasDraw
            ref={canvasRef2}
            brushColor={eraseMode ? 'white' : 'black'}
            lazyRadius={0.1}
            brushRadius={eraseMode ? 10 : 5}
            hideGrid
            canvasWidth={2000} 
            canvasHeight={2000}
          /> */}
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} eraseMode={eraseMode} canvasRef={canvasRef} onClick={handleClick}/>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
