import BootstrapComponent from './BootstrapComponent';

function BootstrapLibrary ( {library} ) {
  const BootstrapComponents = [];
  
  if (library === 'BootstrapLibrary'){
    for (let x = 0; x < 2; x++) {
      BootstrapComponents.push(<BootstrapComponent key={x}/>)
    }
  }
  return (
    <div>
      {BootstrapComponents}
    </div>
  )
};

export default BootstrapLibrary;