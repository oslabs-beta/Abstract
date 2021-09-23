import HTMLComponent from './HTMLComponent.jsx';
import { Icon } from '@iconify/react';


function HTMLLibrary (props) {
  const HTMLcomponents = [];
  const names = ['div', 'link', 'image', 'paragraph']
  const pictures = [<Icon icon='ph:brackets-angle-bold' id='componentIcon'/>,<Icon icon='akar-icons:link-chain' id='componentIcon'/>,<Icon icon='bi:image' id='componentIcon'/>,<Icon icon='fa-solid:paragraph' id='componentIcon'/>]
  for (let x = 0; x < names.length; x++) {
    HTMLcomponents.push(
    <HTMLComponent key={x} name={names[x]} pic={pictures[x]} />)
  }

  return (
    <div id="library-div">
      {HTMLcomponents}
    </div>
  )
};

export default HTMLLibrary;
