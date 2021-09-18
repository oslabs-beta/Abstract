import { React, useState } from 'react';
import Ipad from './Ipad.jsx';
import Phone from './Phone.jsx';

function SizeButton(props) {
// declaring state to toggle state of dropdown
const [dropdown, setDropdown] = useState(false);

  return(
    <>
      <button onClick={() => setDropdown(!dropdown)}>CanvasSize</button>
      {
        // if dropdown is true, render IPad component and Phone component
        dropdown ? 
          <>
            <Ipad/>
            <Phone/>
          </>
        :
          null
      }
    </>
  )
};

export default SizeButton;
