import HTMLComponent from './HTMLComponent.jsx';



function HTMLLibrary ( {library} ) {
  const HTMLcomponents = [];
  const names = ['div', 'link', 'image', 'paragraph']
  if (library === 'HTMLLibrary'){
    for (let x = 0; x < 2; x++) {
    HTMLcomponents.push(<HTMLComponent key={x} names={names}/>)
    }
  }
  return (
    // <button>Html Component</button>
    <div>
      {HTMLcomponents}
    </div>
  )
};

export default HTMLLibrary;
