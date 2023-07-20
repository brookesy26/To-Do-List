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
        {items.map(listItem =>
          <ListItem
            itemObject={items}
            item={listItem}
            SetItemState={setItems} />)}
      </ul >
    </>
  )
}

export default TodoList;

