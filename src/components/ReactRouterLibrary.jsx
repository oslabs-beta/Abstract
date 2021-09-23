import ReactRouterComponent from "./ReactRouterComponent";
import { Icon } from '@iconify/react';

function ReactRouterLibrary (props) {
  let reactRcomponents = [];
  let pictures = [<Icon icon='icon-park-outline:caution'/>]
  for (let x = 0; x < 2; x++) {
  reactRcomponents.push(<ReactRouterComponent key={x} />)
  }
  
  return (
    <div id="library-div">
      {reactRcomponents}
    </div>
  )
};

export default ReactRouterLibrary;
