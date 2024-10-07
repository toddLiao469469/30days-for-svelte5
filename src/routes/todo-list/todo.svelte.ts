export interface Todo {
	id: number;
	title: string;
	content: string;
	done: boolean;
}

const todoListStoreCreator = () => {
	let todoList = $state([
		{
			id: Date.now(),
			title: 'First todo',
			content: 'This is the first todo',
			done: true
		},
		{
			id: Date.now() + 1,
			title: 'Second todo',
			content: 'This is the second todo',
			done: false
		},
		{
			id: Date.now() + 2,
			title: 'Third todo',
			content: 'This is the third todo',
			done: false
		}
	]);

	const addTodo = (todo: Pick<Todo, 'title' | 'content'>) => {
		todoList.push({
			id: Date.now(),
			done: false,
			...todo
		});
	};

	const removeTodo = (id: number) => {
		todoList = todoList.filter((todo) => todo.id !== id);
	};

	const toggleDone = (id: number) => {
		todoList = todoList.map((todo) => {
			if (todo.id === id) {
				todo.done = !todo.done;
			}
			return todo;
		});
	};

	return {
		get todoList() {
			return todoList;
		},
		addTodo,
		removeTodo,
		toggleDone
	};
};

const todoListStore = todoListStoreCreator();

export default todoListStore;
