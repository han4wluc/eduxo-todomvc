
import * as React from 'react';
import { TodoItem } from './TodoItem';

export interface IStateProps {
    todos: any[],
    completedAll: boolean,
    editingIndex: number,
    editingText: string,
}

export interface IActionProps {
    onToggle: (index: number) => void;
    onPressDelete: (index: number) => void;
    onToggleAll: () => void;
    onStartEditing: (index: number) => void;
    onBlurEditing: () => void;
    onSubmitEditing: () => void;
    onCancelEditing: () => void;
    onEdit: (value: string) => void;
}

export type IProps = IStateProps & IActionProps;

class TodoBody extends React.Component<IProps> {

  public render() {
      const { todos, onToggle, onPressDelete, onToggleAll, completedAll, onStartEditing, editingIndex, onBlurEditing, onSubmitEditing, onCancelEditing, onEdit, editingText } = this.props;
      const comps = todos.map((todo, i)=>{
            return (
            <TodoItem
                completed={todo.completed}
                title={todo.title}
                editingText={editingText}
                editing={editingIndex === i}
                onToggle={onToggle.bind(this,i)}
                onPressDelete={onPressDelete.bind(this,i)}
                onPressStartEditing={onStartEditing.bind(this,i)}
                onBlurEditing={onBlurEditing}
                onSubmitEditing={onSubmitEditing}
                onCancelEditing={onCancelEditing}
                onEdit={onEdit}
                key={i}
            />
          )
      })
    return (
        <section className="main">
            { (todos.length > 0) && <><input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={onToggleAll}
            checked={completedAll}
            />
            <label
            htmlFor="toggle-all"
            > }
            Mark all as complete
            </label></> }
            <ul className="todo-list">
                {comps}
            </ul>
        </section>
    );
  }
}

export { TodoBody };
