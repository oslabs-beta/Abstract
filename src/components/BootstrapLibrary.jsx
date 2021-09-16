import BootstrapComponent from './BootstrapComponent';

function BootstrapLibrary ( {library} ) {
  let BootstrapComponents = []
  let name = ['button', 'form', 'navbar', 'list']
  if (library === 'BootstrapLibrary') {
    for (let x = 0; x < name.length; x++){
      BootstrapComponents.push(<BootstrapComponent key={x} name={name[x]}/>)
    }
  };
  return (
    <div>
      {BootstrapComponents}
    </div>
  )
};

export default BootstrapLibrary;