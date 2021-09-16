import ReactRouterComponent from "./ReactRouterComponent";

function ReactRouterLibrary ({ library }) {
  let ReactRcomponents = [];
 
  if (library === 'ReactRouterLibrary'){
    for (let x = 0; x < 2; x++) {
    ReactRcomponents.push(<ReactRouterComponent key={x} />)
    }
  }
  return (
    <div>
      {ReactRcomponents}
    </div>
  )
};

export default ReactRouterLibrary;
