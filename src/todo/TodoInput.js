import React, { useState } from 'react';

function TodoInput() {
	const [todo, setTodo] = useState('');

	function handleTodoSubmit(e) {
		e.preventDefault();
	}

	return (
		<div>
			<form onSubmit={handleTodoSubmit}>
				<input
					type="text"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default TodoInput;