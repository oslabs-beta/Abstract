import BootstrapComponent from './BootstrapComponent';

function BootstrapLibrary (props) {
  let BootstrapComponents = []
  let name = ['button', 'form', 'navbar', 'nav', 'list']

    for (let x = 0; x < name.length; x++){
      BootstrapComponents.push(<BootstrapComponent key={x} name={name[x]}/>)
    }
  return (
    <div>
      {BootstrapComponents}
    </div>
  )
};

export default BootstrapLibrary;