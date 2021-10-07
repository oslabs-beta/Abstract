import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  canvasSize: state.main.canvasSize
});

function Canvas({ children, ...props }) {
  const [canvasStyle, setCanvasStyle] = useState({ width: '683px', height: '512px' });

  useEffect(() => {
    if (props.canvasSize === 'iPad Pro') { // 75% of actual iPad Pro resolution
      setCanvasStyle({ width: '768px', height: '1024.5px' })
    } else if (props.canvasSize === 'iPhone X') { // 100% of actual iPhone X resolution
      setCanvasStyle({ width: '375px', height: '812px' })
    }
  }, [props.canvasSize])

  return (
    <div id="canvas_backdrop" style={{ ...canvasStyle}}>
      { children }
    </div>
  )
};

export default connect(mapStateToProps, null)(Canvas);
