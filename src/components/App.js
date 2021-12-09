import { Component } from 'react';
import TodoList from './components/todos/TodoList';

class App extends Component {
  state = { todos: [
    { id: 1, title: 'Learn Ruby',  desc: 'learn ruby langauge', complete: true, },
    { id: 2, title: 'Learn JS',  desc: 'learn js langauge', complete: true, },
    { id: 3, title: 'Learn React',  desc: 'learn React technology', complete: false, },
  ] }

  render() {
    return (
      <>
        <h1>My Todos</h1>
        <TodoList />
      </>
    )
  }
}

export default App;