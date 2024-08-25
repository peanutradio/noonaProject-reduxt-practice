import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector(state=>state.count)
  const dispatch  = useDispatch()

  const increase=()=>{
    dispatch({type: "INCREMENT"})
  }

  const decrease=()=>{
    dispatch({type: "DECREASE"})
  }
  return (
    <div className='count'>
      <h1>{count}</h1>
      <div className="button-container">
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      </div>
      <Box/>
    </div>
  );
}

export default App;
