import Canvas from './Canvas.jsx';
import CanvasComponents from './CanvasComponents.jsx';
import Preview from './Preview.jsx';
// import Tree from './Tree.jsx';

function BodyContainer() {
  return (
    <>
      <Canvas/>
      <CanvasComponents/>
      <Preview/>
      {/* <Tree/> */}
    </>
  )
};

export default BodyContainer;