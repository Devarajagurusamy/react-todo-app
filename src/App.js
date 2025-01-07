import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
// import SearchItem from "./SearchItem";

import {useState} from 'react'; 


function App() {
  const initialItems = [
    { id: 1, item: 'Buy groceries', checked: false },
    { id: 2, item: 'Walk the dog', checked: true },
    { id: 3, item: 'Read a book', checked: false }
  ];

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('todo_list')) || initialItems
  );

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')

  const addItem = (item) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem={id,checked:false, item}
    const listItems = [...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))

  }

const handleCheck=(id)=>{
  const listItems=items.map((item)=> item.id===id ? {...item,checked:!item.checked} : item)
  setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))


}

const handleDelete=(id)=>{
  const listItems = items.filter((item)=>item.id!==id)
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))

}

const handleSubmit = (e) =>{
  e.preventDefault()
  if(!newItem) return;
  console.log(newItem)
  addItem(newItem)
  setNewItem('')

}


  return (

    <div>
    <Header title="To Do List" 
      search = {search}
      setSearch = {setSearch}
    />


    <AddItem
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      length={items.length}
    />

    
    <Content 
      items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
    /> 

    <Footer />
    </div>
    
  );
}

export default App;
