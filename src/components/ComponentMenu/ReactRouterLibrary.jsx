import ReactRouterComponent from "./ReactRouterComponent";

function ReactRouterLibrary (props) {
  let reactRcomponents = [];

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
