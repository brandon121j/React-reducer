import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './todo/TodoInput';
import { TodoInputContext } from './context/todoContext';
import './App.css';

let tempTodoArray = [
  {
    id: uuidv4(),
    todo: 'walk the dog',
    isCompleted: false
  },
  {
    id: uuidv4(),
    todo: 'walk the cat',
    isCompleted: false
  },
  {
    id: uuidv4(),
    todo: 'walk the fish',
    isCompleted: false
  },
]


function App() {
  const [todoArray, setTodoArray] = useState(tempTodoArray)

  function showTodoInput() {
    return (
    <TodoInputContext.Provider value={{}}>
      <TodoInput/>
    </TodoInputContext.Provider>
    )
  }

	return (
  <div className="App">
    {showTodoInput()}
  </div>
  )
}

export default App;
