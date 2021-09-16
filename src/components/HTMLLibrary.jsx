import HTMLComponent from './HTMLComponent.jsx';



function HTMLLibrary ( {library} ) {
  const HTMLcomponents = [];
  const names = ['div', 'link', 'image', 'paragraph']
  
  if (library === 'HTMLLibrary'){
    for (let x = 0; x < names.length; x++) {
      HTMLcomponents.push(
      <HTMLComponent key={x} name={names[x]} />)
    }
  };

  return (
    <div>
      {HTMLcomponents}
    </div>
  )
};

export default HTMLLibrary;
