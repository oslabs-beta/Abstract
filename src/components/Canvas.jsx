import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import CanvasComponents from './CanvasComponents.jsx';

const mapStateToProps = (state) => ({
  canvasSize: state.main.canvasSize
});

function Canvas({ children, ...props }) {
  const [canvasStyle, setCanvasStyle] = useState({ width: '683px', height: '512px' });

  useEffect(() => {
    if (props.canvasSize === 'iPad Pro') {
      setCanvasStyle({ width: '512px', height: '683px' })
    } else if (props.canvasSize === 'iPhone X') {
      setCanvasStyle({ width: '375px', height: '812px' })
    }
  }, [props.canvasSize])

  return (
    <div id="canvas_backdrop" style={ { ...canvasStyle, backgroundColor: "white", borderStyle: "solid" } }>
      {/* <CanvasComponents/> */}
      { children }
    </div>
  )
};

export default connect(mapStateToProps, null)(Canvas);
