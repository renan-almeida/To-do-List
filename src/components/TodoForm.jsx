import {useState} from 'react'

function TodoForm({ addTodo, categories }) {

  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // Adicionar tarefa
    addTodo(value, category); 
    // limpar os campos
    setValue('');
    setCategory('');
    console.log('Tarefa criada:', { title: value, category });
  }
  return (
    <div>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder="Digite o título"
         onChange={(e)=> setValue(e.target.value)}
         value={value}
          />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Selecione uma categoria</option>
          {categories.map((cat, index) => (
              <option key={index} value={cat.text}>{cat.text}</option>
          ))}
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;