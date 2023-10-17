import React from 'react'

const TodoItemEdit = ({taskEditBtn,taskName}) => {

  const handleXbtn = () => {
    taskEditBtn(false);
  }

  return (
    <div>
      <div className="popup-Box">
        <button className='X-btn' onClick={handleXbtn}>X</button>
        <h1>{taskName}</h1>
      </div>
    </div>
  )
}

export default TodoItemEdit