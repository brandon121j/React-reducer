import { useReducer } from 'react';
import './App.css';

const initialState = { count: 0 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'x5':
      return { count: state.count * 5 };
		default:
			throw new Error();
	}
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
	return (
  <div className="App">
    Count: {state.count}
    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    <button onClick={() => dispatch({ type: 'x5' })}>X5</button>
    <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
  </div>
  )
}

export default App;
