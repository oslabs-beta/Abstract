import HTMLComponent from './HTMLComponent.jsx';



function HTMLLibrary (props) {
  const HTMLcomponents = [];
  const names = ['div', 'link', 'image', 'paragraph']

  for (let x = 0; x < names.length; x++) {
    HTMLcomponents.push(
    <HTMLComponent key={x} name={names[x]} />)
  }

  return (
    <div>
      {HTMLcomponents}
    </div>
  )
};

export default HTMLLibrary;
