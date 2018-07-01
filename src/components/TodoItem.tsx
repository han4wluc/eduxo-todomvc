import * as classNames from "classnames";
import * as React from "react";

export interface IProps {
  title: string;
  editingText: string;
  completed: boolean;
  editing: boolean;
  onToggle?: () => void;
  onPressDelete: () => void;
  onPressStartEditing: () => void;
  onBlurEditing: () => void;
  onCancelEditing: () => void;
  onSubmitEditing: () => void;
  onEdit: (value: string) => void;
}

class TodoItem extends React.Component<IProps> {
  //   public state : ITodoItemState;

  public static defaultProps: Partial<IProps> = {
    completed: false,
    title: ""
  };

  private editInput: any;

  constructor(props: any) {
    super(props);
    // this.editInput = null;
    // this.state = { editText: this.props.todo.title };
  }

  /**
   * Safely manipulate the DOM after updating the state when invoking
   * `this.props.onEdit()` in the `handleEdit` method above.
   * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate
   * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
   */
  public componentDidUpdate(prevProps: IProps) {
    if (!prevProps.editing && this.props.editing) {
      this.editInput.focus();
      // var node = React.findDOMNode(this.refs.editField);
      // node.focus();
      // node.setSelectionRange(node.value.length, node.value.length);
    }
  }

  public render() {
    const {
      completed,
      title,
      editingText,
      onToggle,
      onPressDelete,
      editing,
      onPressStartEditing,
      onBlurEditing
    } = this.props;
    return (
      <li
        className={classNames({
          completed,
          editing
        })}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={onToggle}
          />
          <label onDoubleClick={onPressStartEditing}>{title}</label>
          <button className="destroy" onClick={onPressDelete} />
        </div>
        <input
          ref={view => {
            this.editInput = view;
          }}
          className="edit"
          value={editingText}
          onBlur={onBlurEditing}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
      </li>
    );
  }
  private onChange = (event: any): void => {
    const { onEdit } = this.props;
    onEdit(event.target.value);
  };

  private onKeyDown = (event: any): void => {
    const { onSubmitEditing, onCancelEditing } = this.props;
    if (event.keyCode === 27) {
      onCancelEditing();
    }
    if (event.keyCode === 13) {
      onSubmitEditing();
    }
  };
}

export { TodoItem };
