import Canvas from './Canvas.jsx';
import Components from './Components.jsx';
import Preview from './Preview.jsx';
import Tree from './Tree.jsx';

function BodyContainer() {
  return (
    <>
      <Canvas/>
      <Components/>
      <Preview/>
      {/* <Tree/> */}
    </>
  )
};

export default BodyContainer;