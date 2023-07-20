import { useState } from "react"
import ListItem from "./Items.js"
import AddItem from "./AddItem.js";

const TodoList = () => {
  const [items, setItems] = useState([])

  return (
    <>
      <AddItem
        itemObject={items}
        SetItemState={setItems}
      />
      <ul>
        {items.map(item =>
          <ListItem key={item.id}
            itemObject={items}
            item={item}
            SetItemState={setItems} 
            />)}
      </ul >
    </>
  )
}

export default TodoList;

