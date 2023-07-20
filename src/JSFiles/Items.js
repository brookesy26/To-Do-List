import Label from "./InputLabel"
import Input from "./inputHolder"
import Button from "./button"
import './todo.css'
import { useState } from "react"

const ListItem = ({ itemObject, item, SetItemState}) => {
const [readonly, setReadOnly] = useState(true)
const [checkedStatues, setCheckedStatues] = useState(false)

  function handleEditChange(e, itemID) {
    SetItemState(itemObject.map(item =>
      itemID === item.id ? { ...item, title: e.target.value } : item
    ))
  }

  function handleCheckClick() {
    setCheckedStatues(!checkedStatues)
  }

  function handleDeleteClick(itemID) {
    SetItemState(itemObject.filter(item => item.id !== itemID))
  }

  function handleEditClick() {
    setReadOnly(!readonly)
  }
  
  function handleClassName(){
    let className
    if(checkedStatues){
       className = 'item-checked'
    } else if(!checkedStatues && readonly){
         className = 'item-uneditable'
      } else{
         className = 'item-editable'
      }
      return className
    }

  return (
    <li>
      <Input
        type='checkbox'
        checked={checkedStatues}
        onChange={() => { handleCheckClick(item.id) }}
      />
     <Label className={handleClassName()}> 
        {readonly ?
          <Input
            type='text'
            value={item.title}
          /> :
          <Input
            type='text'
            readOnly={readonly}
            onChange={(e) => handleEditChange(e, item.id)}
          />
        }
      </Label>
      <Button
        onClick={() => handleEditClick(item.id)}>
        {readonly ? 'edit' : 'save'}
      </Button>
      <Button onClick={() => handleDeleteClick(item.id)}>
        Delete
      </Button>
    </li>
  )
}

export default ListItem;