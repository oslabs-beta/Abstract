import React from 'react';

import CanvasButton from './CanvasButton.jsx';
import PreviewButton from './PreviewButton.jsx';
import TreeButton from './TreeButton.jsx';

function NavButtons() {
  return (
    <div id="nav_buttons">
      <PreviewButton />
      <CanvasButton />
      {/* <TreeButton /> */}
    </div>
  )
};

export default NavButtons;
