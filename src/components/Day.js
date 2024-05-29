import dayjs from "dayjs";
import React, { useContext, useState, useEffect, useRef } from "react";
import GlobalContext from "../context/GlobalContext";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import CanvasDraw from 'react-canvas-draw';

export default function Day({ day, rowIdx, eraseMode, canvasRef}) {
  const [dayEvents, setDayEvents] = useState([]);
  // const canvasRef2 = useRef(null);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  // const styles = {
  //   // border: '0.0625rem solid #9c9c9c',
  //   // borderRadius: '0.25rem',
  // };
  
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
      // <CanvasDraw
      //   ref={canvasRef2}
      //   brushColor={eraseMode ? 'white' : 'black'}
      //   lazyRadius={0.1}
      //   brushRadius={eraseMode ? 10 : 5}
      //   hideGrid
        // canvasWidth={2000} 
        // canvasHeight={2000}
        // style={{
        //   position: 'absolute',
        //   top: 200,
        //   left: 200,
        // }}
      // />
  //   );
  // }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
          
        </p>
        
      </header>
      {/* <Canvas/> */}
      {/* <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div> */}

    </div>
  );
}
