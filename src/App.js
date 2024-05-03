import Header from "./Header";
import  Body from  "./Body"
import Footer from "./Footer";
import "./index.css"
import { useState } from "react";
import AddItem from "./AddItem";
import SearchPlace from "./SearchPlace";


function App() {
  const [items , setItems] = useState(JSON.parse(localStorage.getItem('todo_list'))
   );

  const [newItem , setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1 ] .id + 1 : 1;
    const addNewItem = {id, checked:false, item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
    
    const handleChange = (id) =>{
      const listItems = items.map((item) => item.id===id ? {checked:!item.checked,id:item.id,item:item.item} : item)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify (listItems));
    }
  
    const handledelete = (id) => {
      const listItems = items.filter((item)=> item.id!==id)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify (listItems));
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!newItem) return;
      console.log(newItem)
      addItem(newItem)
      setNewItem('')
    }

  return (
    <div className="App">
      <Header />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
    <SearchPlace
    search = {search}
    setSearch ={setSearch}
   />
      <Body 
      items = {items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      setItems = {setItems}
      handleChange = {handleChange}
      handledelete = {handledelete}
      />
      <Footer
      length = {items.length}
      />

    </div>
    

  );

}

export default App