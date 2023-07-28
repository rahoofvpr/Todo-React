import './App.css';
import calendar from './calendar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faPlus,faTrash} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo,setTodo] = useState('')
  const [selected,setSelected] = useState([]);

  const addtodo = () => {
    if (todo.trim() !== '')
    {
      setTodos([...todos,{id:Date.now(),text:todo}]);
      setTodo('');
    }
  }

  const selectTodo =(id)=> (e) => {
    if (e.target.checked)
    {
      setSelected([...selected,id]);
    }
    else{
      setSelected(selected.filter((item) => item !== id));

    }
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addtodo();
    }
  };

  const deleteTodo = () => {
    if (selected.length > 0)
    {
      setTodos(todos.filter(item => !selected.includes(item.id)));
    }
  }


  return (
<div className="App">
   <div  style={{alignItems:'center',display:'inline-flex',paddingTop:'5%'}}>
      <img alt='' src={calendar} style={{  paddingRight: '10px',width: '40px',height: '40px'}}/>
      <h1 >MyTodo List</h1>
   </div>
   <div className='main-container'>
      <div className='todo-input-header'>
         <FontAwesomeIcon icon={faBars} />
         <input  value = {todo} onChange={(e) => {setTodo(e.target.value)}} onKeyDown={handleKeyPress}    className='todo-input' placeholder="Write your notes here"  style={{paddingLeft:'30px'}}/>
         <FontAwesomeIcon icon={faPlus}  onClick={addtodo} />
         <FontAwesomeIcon icon={faTrash} style={{ color: 'red' , paddingLeft:'10px'}} onClick={deleteTodo} />
      </div>
      <hr/>
      <ul className='task'>
         {todos.map(t =>(
         <li key={t.id}>
            <input type='checkbox' onChange={selectTodo(t.id)}/>
            <p>{t.text}</p>
         </li>
         ))}
      </ul>
   </div>
</div>


  );
}

export default App;
