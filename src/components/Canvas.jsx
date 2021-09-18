import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CanvasComponents from './CanvasComponents.jsx';

const mapStateToProps = (state) => ({
  canvasSize: state.main.canvasSize
});

function Canvas(props) {
  const [canvasStyle, setCanvasStyle] = useState({ width: '683px', height: '512px' });

  useEffect(() => {
    if (props.canvasSize === 'iPad Pro') {
      setCanvasStyle({ width: '683px', height: '512px' })
    } else if (props.canvasSize === 'iPhone X') {
      setCanvasStyle({ width: '406px', height: '187.5px' })
    }
  }, [props.canvasSize])

  return (
    <div id="canvas_backdrop" style={ { ...canvasStyle, backgroundColor: "red" } }>
      <h3>hello it me, canvas backdrop</h3>
      <CanvasComponents/>
    </div>
  )
};

export default connect(mapStateToProps, null)(Canvas);
