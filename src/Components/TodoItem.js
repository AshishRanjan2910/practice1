import React from 'react'
import './TodoItem.css'

class TodoItem extends React.Component {
  render() {
    const dest = this.props
    return (
      <li>
        <div className='text'>{dest.todo}</div>
        <button onClick={() => dest.onMarkComplete(dest.todo)}>Mark as complete</button>
      </li>
    )
  }
}

export default TodoItem