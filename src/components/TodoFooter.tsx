
import * as classNames from 'classnames';
import * as React from 'react';

export interface IStateProps {
  numberTodosLeft: number,
  showClearCompletedButton: boolean,
  displayMode: 'all' | 'active' | 'completed',
}

// tslint:disable-next-line
export interface IActionProps {
  onPressClearCompleted: () => void;
}

export type IProps = IStateProps & IActionProps;


class TodoFooter extends React.Component<IProps> {

  public render() {
    const { numberTodosLeft, showClearCompletedButton, displayMode, onPressClearCompleted } = this.props;

    // var activeTodoWord = Utils.pluralize(this.props.count, 'item');
    // let clearButton = null;

    // if (numberCompleted > 0) {
     const clearButton = (
        <button
          className="clear-completed"
          onClick={onPressClearCompleted}>
          Clear completed
        </button>
      );
    // }

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{numberTodosLeft}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={classNames({selected: displayMode === 'all'})}
              >
                All
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/active"
              className={classNames({selected: displayMode === 'active'})}
              >
                Active
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/completed"
              className={classNames({selected: displayMode === 'completed'})}
              >
                Completed
            </a>
          </li>
        </ul>
        {showClearCompletedButton && clearButton}
      </footer>
    );
  }
}

export { TodoFooter };
