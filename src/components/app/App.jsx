import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers/colorReducer';

// const useRecord = (init) => {
//   const [before, setBefore] = useState([]);
//   const [current, setCurrent] = useState(init);
//   const [after, setAfter] = useState([]);

//   const undo = () => {
//     setAfter(after => [current, ...after]);
//     setCurrent(before[before.length - 1]);
//     setBefore(before => before.slice(0, -1));
//   };
  
//   const redo = () => {
//     setBefore(before => [...before, current]);
//     setCurrent(after[0]);
//     setAfter(after => after.slice(1));
//   }
  
//   const record = val => {
//     setBefore(before => [...before, current]);
//     setCurrent(val);
//   }
  
//   return {
//     undo,
//     record,
//     redo,
//     current,
//   }
// };

function App() {
  // const { current, undo, redo, record } = useRecord('#FF0000');
  const [state, dispatch] = useReducer(reducer, initialState);

  const undo = () => {
    dispatch({
      type: 'UNDO',
    });
  };
  
  const redo = () => {
    dispatch({
      type: 'REDO',
    });
  };

  const record = (value) => {
    dispatch({
      type: 'RECORD',
      payload: value
    });
  };

  return (
    <>
      <button data-testid='undo' onClick={undo}>undo</button>
      <button data-testid='redo' onClick={redo}>redo</button>
      <input data-testid='input' type='color' value={state.current} onChange={({ target }) => record(target.value)} />
      <div data-testid='display' style={{ backgroundColor: state.current, width: '10rem', height: '10rem' }}></div>
    </>
  )
}

export default App;