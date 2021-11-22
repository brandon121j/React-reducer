import React, { useContext } from 'react';
import { TodoContext } from '../context/todoContext';
import Child1 from './Child1';
import Child2 from './Child2';

function Todo() {
	// const todoData = useContext(TodoContext);
	// console.log(todoData);

	const {
		todoItem: { todo },
	} = useContext(TodoContext);

	return (
		<div>
			<span>{todo}</span>
			<button>Done</button>
			<button>Delete</button>
		</div>
	);
}

export default Todo;
