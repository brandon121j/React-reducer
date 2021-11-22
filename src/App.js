import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './todo/TodoInput';
import Todo from './todo/Todo';
import { TodoInputContext, TodoContext } from './context/todoContext';
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
    <TodoInputContext.Provider value={{ addTodo }}>
      <TodoInput/>
    </TodoInputContext.Provider>
    )
  }

  function addTodo(todo) {
  
    let newTodoArray = [
      ...todoArray, 
      {
      id: uuidv4(),
      todo,
      isCompleted: false
    }
  ];

    setTodoArray(newTodoArray);
  }

  function handleDelete(index) {
    let newArray = Object.assign([], todoArray);

    newArray.splice(index, 1);

    setTodoArray(newArray)
  }

  function showTodo() {
    return todoArray.map((item, index) => {
      return (
      <TodoContext.Provider 
        key={ item.id } 
        value={{ todoItem: item, index, handleDelete }}
      >
        <Todo/>
      </TodoContext.Provider>
      )
    })
  }

	return (
  <div className="App">
    {showTodoInput()}
    {showTodo()}
  </div>
  )
}

export default App;
