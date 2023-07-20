import Label from "./InputLabel"
import Input from "./inputHolder"
import Button from "./button"

const ListItem = ({ itemObject, item, SetItemState }) => {

  function handleEditChange(e, itemID) {
    SetItemState(itemObject.map(item =>
      itemID === item.id ? { ...item, title: e.target.value } : item
    ))
  }

  function handleCheckClick(itemID) {
    SetItemState(itemObject.map(item =>
      itemID === item.id ? { ...item, checked: !item.checked } : item
    ))
  }

  function handleDeleteClick(itemID) {
    SetItemState(itemObject.filter(item => item.id !== itemID))
  }

  function handleEditClick(itemID) {
    SetItemState(itemObject.map(item =>
      itemID === item.id ? { ...item, readonly: !item.readonly } : item
    ))
  }

  return (
    <li key={item.id}>
      <Input
        type='checkbox'
        checked={item.checked}
        onChange={() => { handleCheckClick(item.id) }}
      />
      <Label className={
        (item.checked ?
          'item-checked' :
          (item.readonly ?
            'item-uneditable' :
            'item-editable'))}
      >
        {item.readonly ?
          <Input
            type='text'
            value={item.title}
          /> :
          <Input
            type='text'
            readOnly={item.readonly}
            onChange={(e) => handleEditChange(e, item.id)}
          />
        }
      </Label>
      <Button
        onClick={() => handleEditClick(item.id)}>
        {item.readonly ? 'edit' : 'save'}
      </Button>
      <Button onClick={() => handleDeleteClick(item.id)}>
        Delete
      </Button>
    </li>
  )
}

export default ListItem;