import React, {useState} from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import { ButtonGroup, Button } from "@material-tailwind/react";
export default function Sidebar({setWritingTool}) {

  const handleButtonClick = (action) => {
    // Perform actions based on the button clicked
    switch (action) {
      case 'write':
        setWritingTool('write')
        console.log('Write button clicked');
        // Implement write logic here
        break;
      case 'erase':
        setWritingTool('erase')
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
