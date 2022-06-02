import React from 'react'

export const Todo = ({ text, clickToToggle, clickToDelete, complete }) => {
  return (
   <div >
   <span
     
     style={{ color: complete ? "green" : "red" }}
   >
     {text}
   </span>
   <div>
     <button   onClick={clickToToggle}>
       TOGGLE
     </button>
     <button   onClick={clickToDelete}>
       DELETE
     </button>
   </div>
 </div>
  )
}
