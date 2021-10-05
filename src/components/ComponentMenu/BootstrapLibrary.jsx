import BootstrapComponent from './BootstrapComponent';
import { Icon } from '@iconify/react';

function BootstrapLibrary (props) {
  let BootstrapComponents = []
  let name = ['button', 'form', 'navbar', 'nav', 'list']
  let pictures = [<Icon icon='dashicons:button' id='componentIcon'/>, <Icon icon='clarity:form-line' id='componentIcon'/>, <Icon icon='tabler:layout-navbar' id='componentIcon'/>, <Icon icon='bi:segmented-nav' id='componentIcon'/>, <Icon icon='bi:list-ol' id='componentIcon'/>]

    for (let x = 0; x < name.length; x++){
      if (name[x] === 'button' || name[x] === 'form') {
        BootstrapComponents.push(<BootstrapComponent key={x} pic={pictures[x]} name={name[x]}/>)
      } else {
        BootstrapComponents.push(<BootstrapComponent disabled={x} key={x} pic={pictures[x]} name={name[x]}/>)
    }
  }
  return (
    <div id="library-div">
      {BootstrapComponents}
    </div>
  )
};

export default BootstrapLibrary;