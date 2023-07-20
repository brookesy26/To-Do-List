import { useState } from 'react'
import Button from './button'
import Input from './inputHolder'
import './todo.css'

const AddItem = ({ SetItemState, itemObject }) => {
  const [itemNameValue, setItemNameValue] = useState('')
  const [itemID, setItemID] = useState(0)

  function handleAddItemClick() {
    SetItemState([...itemObject, { id: itemID, title: itemNameValue, checked: false, readonly: true }])
    setItemID(itemID + 1)
  }

  function handleValueChange(e) {
    setItemNameValue(e.target.value)
  }

  return (
    <div>
      <Input
        type='text'
        onChange={handleValueChange} />
      <Button
        onClick={handleAddItemClick}>
        Add Item
      </Button>
    </div>
  )
}

export default AddItem