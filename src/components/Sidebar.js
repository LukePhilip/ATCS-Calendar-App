import React, {useState} from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import { ButtonGroup, Button } from "@material-tailwind/react";
export default function Sidebar({setEraseMode, canvasRef2}) {


  const handleButtonClick = (action) => {
    // Perform actions based on the button clicked
    switch (action) {
      case 'write':
        setEraseMode(false)
        canvasRef2.current?.eraseMode(false);
        console.log('Write button clicked');
        // Implement write logic here
        break;
      case 'erase':
        setEraseMode(true)
        canvasRef2.current?.eraseMode(true);
        console.log('Erase button clicked');
        // Implement erase logic here
        break;
      default:
        break;
    }
  };

  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <ButtonGroup variant="outlined" ripple={true} style={{marginTop: 20}}>
        <Button onClick={() => handleButtonClick('write')}>Write</Button>
        <Button onClick={() => handleButtonClick('erase')}>Erase</Button>
    </ButtonGroup>
    {/* <text>P</text> */}
      <Labels />
      
    </aside>
  );
}
