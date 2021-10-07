import { React, useState } from 'react';
import { Icon } from '@iconify/react';
import Ipad from './Ipad.jsx';
import Phone from './Phone.jsx';

function SizeButton(props) {
// declaring state to toggle state of dropdown
  const [dropdown, setDropdown] = useState(false);

  return(
    <div id="size_button_container">
      <button id="size_button" onClick={() => setDropdown(!dropdown)}>
        <Icon icon="mdi:tablet-cellphone" />
      </button>
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
