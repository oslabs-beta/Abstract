import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  canvasSize: state.main.canvasSize
});

function Preview(props) {
  //need a helper function to add a \ before template literals
  const string = `function HelloWorld(){
  p { color: red; } 
  \`code { background-color: #eee; }
  }
  <div>
    hi world 
  </div>\``
  const [canvasStyle, setCanvasStyle] = useState({ width: '683px', height: '512px' });

  useEffect(() => {
    if (props.canvasSize === 'iPad Pro') {
      setCanvasStyle({ width: '683px', height: '512px' })
    } else if (props.canvasSize === 'iPhone X') {
      setCanvasStyle({ width: '406px', height: '187.5px' })
    }
  }, [props.canvasSize])
  return (
    <div id="preview_backdrop" style={ { ...canvasStyle, backgroundColor: "green" } }>
      <h3>hello it me, preview backdrop</h3>
      <pre>
        <code>
          {string}
        </code>
      </pre>
      
    </div>
  )
};

export default connect(mapStateToProps, null)(Preview)


