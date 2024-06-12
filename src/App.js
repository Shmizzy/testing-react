import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([])
  const [formData, setFormData] = useState({
    name: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, formData.name]);
    setFormData({
      name: ''
    })
  }

  return <>
    <h1>Todo App</h1>
    <div className="todos" data-testid="todos">{todos.map((todo, index) => (
      <p key={index}>{todo}</p>
    ))}</div>
    <label htmlFor="name">Todo Name: </label>
    <input id="name" name="name" placeholder="TODO" onChange={handleChange} value={formData.name}></input>
    <button onClick={handleSubmit}>Add Todo</button>
  </>
}


export default App;