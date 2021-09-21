import { React, useState } from 'react';
import Ipad from './Ipad.jsx';
import Phone from './Phone.jsx';

function SizeButton(props) {
// declaring state to toggle state of dropdown
const [dropdown, setDropdown] = useState(false);

  return(
    <div id="size_button">
      <button onClick={() => setDropdown(!dropdown)}>CanvasSize</button>
      {
        // if dropdown is true, render IPad component and Phone component
        dropdown ? 
          <>
            <Ipad setDropdown={setDropdown}/>
            <Phone setDropdown={setDropdown}/>
          </>
        :
          null
      }
    </div>
  )
};

export default SizeButton;
