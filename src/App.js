import './App.css';

function handleTodoSubmit(e) {
e.preventDefault()
}


function App() {

	return (
  <div className="App">
    <form onSubmit={handleTodoSubmit}>
      <input
        type='text'
        value={todo}
        onChange={() => setTodo(e.target.value)}
      />
      <button>Submit</button>
    </form>
  </div>
  )
}

export default App;
