import React, { useState, useContext, useEffect, useRef } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const [eraseMode, setEraseMode] = useState(false)
  const canvasRef2 = useRef(null);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar setEraseMode={setEraseMode} canvasRef2={canvasRef2}/>
          <Month month={currenMonth} eraseMode={eraseMode} canvasRef2={canvasRef2}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
