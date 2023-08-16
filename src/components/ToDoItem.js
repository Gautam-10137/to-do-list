import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
function ToDoItem({id,text,doneTask}) {
  return (
    <div className='item'>
      <div className='text'>{text}</div>
      <div className='footer'>
      <CheckBoxIcon className="checkBox" onClick={()=>{doneTask(id)}}></CheckBoxIcon>
      </div>
    </div>
  )
}

export default ToDoItem
