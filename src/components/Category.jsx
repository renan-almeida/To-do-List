import { useState } from "react"

function Category  ({ addCategory })  {
    const [category, setCategory] = useState('')
    const handleSubmit = (e) => 
        {
        e.preventDefault();
        if (!category) {
            alert('Por favor, preencha o campo de categoria.');
            return;
        }
        // Adicionar categoria
        addCategory(category)
        // Limpar o campo
        setCategory("")
        console.log('Categoria adicionada:', { category })
        }
    return (
        <div className="category">
            <div className="category-Options">
            <h2>Adicionar categoria:</h2>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Digite o nome da categoria"
                onChange={(e) => setCategory(e.target.value)}
                value={category} />
            <button type="submit">Criar categoria</button> 
        </form>
        </div>
    </div>
  )
}
export default Category