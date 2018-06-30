
import * as React from 'react';
import { TodoItem } from './TodoItem';

export interface IStateProps {
    todos: any[]
}

// tslint:disable-next-line
export interface IActionProps {}

class TodoBody extends React.Component<IStateProps> {

  public render() {
      const { todos } = this.props;
      const comps = todos.map((todo, i)=>{
          return (
            <TodoItem key={i}/>
          )
      })
    return (
        <section className="main">
            <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            value={'hello'}
            // onChange={ e => this.toggleAll(e) }
            // checked={activeTodoCount === 0}
            />
            <label
            htmlFor="toggle-all"
            >
            Mark all as complete
            </label>
            <ul className="todo-list">
                {comps}
            </ul>
        </section>
    );
  }
}

export { TodoBody };
