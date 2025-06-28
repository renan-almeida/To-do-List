import { useState } from 'react'
import './App.css'
import Todo from './components/Todo.jsx'
import TodoForm from './components/TodoForm.jsx';
import Search from './components/Search.jsx';
import Filter from './components/Filter.jsx';
import Category from './components/Category.jsx';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false
    },
  ]);

  const [categories, setCategories] = useState([
    {   id: 1,
       text: "Trabalho" },
    {   id: 2,
       text: "Pessoal"},
    {   id: 3,
       text: "Estudos"}
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc")
  const addTodo = (text, category) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      category,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id? todo : null);
    setTodos(filteredTodos);
};

const completeTodo = (id) => {
  const newTodos = [...todos];
  newTodos.map((todo) => todo.id === id ?
   (todo.isCompleted = !todo.isCompleted) : todo);
  setTodos(newTodos);
};

const addCategory = (text) => {
  const newCategory = {
    id: categories.length + 1,
    text
  };
  setCategories([...categories, newCategory]);
}
  
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='todo-list'>
        {todos
        .filter((todo) => 
        filter === "All" 
        ? true
        : filter === "Completed"
        ? todo.isCompleted
        : !todo.isCompleted
      )
        .filter((todo => todo.text.toLowerCase().includes(search.toLowerCase())))
        .sort((a,b) =>
        sort === "Asc"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text)
        )
        .map((todo) => (
        <Todo key={todo.id} todo={todo} 
                removeTodo={removeTodo}
                completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo} categories={categories} />
      <Category addCategory={addCategory} />
      
    </div>
  );    
}

export default App
