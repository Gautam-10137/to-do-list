import React from 'react'

function CreateTask({text,textHandler,saveHandler}) {
  return (
    <div className='item'> 
      <textarea
      cols='10'
      rows='5'
      value={text}
      onChange={textHandler}
      placeholder='Type...'
      ></textarea>
      <div className='footer'>
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  )
}

export default CreateTask
