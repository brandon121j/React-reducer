import React, { useContext } from 'react';
import { TodoContext } from '../context/todoContext';
import Child1 from './Child1';
import Child2 from './Child2';

function Todo() {
	// const todoData = useContext(TodoContext);
	// console.log(todoData);

	const {
		todoItem: { todo },
        index,
        handleDelete
	} = useContext(TodoContext);

	return (
		<div>
			<span>{todo}</span>
			<button>Done</button>
			<button onClick={() => handleDelete(index)}>Delete</button>
		</div>
	);
}

export default Todo;
