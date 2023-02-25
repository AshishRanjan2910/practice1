import React from 'react'
import TodoItem from './TodoItem'
import "./List.css"

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [
        'Coding 1 hour',
        'Meditate 10 mins',
        'Drink Water 3 Liters'
      ]
    }
  }

  handleMarkComplete = (todo) => {
    const { todoList } = this.state
    const index = todoList.indexOf(todo)

    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1)
      ],
    })
  }

  render() {
    const { todoList } = this.state
    return (
      <div>
        <list>
            <ul>
            {todoList.map(todo => (
                <TodoItem
                key={todo}
                todo={todo}
                onMarkComplete={this.handleMarkComplete}
                />
            ))}
            </ul>
        </list>
      </div>
    )
  }
}

export default List