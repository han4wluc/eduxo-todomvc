
import * as React from 'react';

export interface IStateProps {
  textValue: string
}

export interface IActionProps {
  onChangeText: (value: string) => void;
  onPressEnter: () => void;
  onPressExit: () => void;
}

export type IProps = IStateProps & IActionProps;

// export interface IClassInterface {
//   onChangeText: (value: string) => void
// }

class TodoHeader extends React.Component<IProps> {

  public render() {
    const { textValue } = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          // ref="newField"
          value={textValue}
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onChangeText}
          // onKeyDown={ e => this.handleNewTodoKeyDown(e) }
          onKeyDown={this.onKeyDown}
          autoFocus={true}
        />
      </header>
    );
  }

  private onChangeText = (event: any) : void => {
    const { onChangeText } = this.props;
    onChangeText(event.target.value)
  }

  private onKeyDown = (event: any) : void => {
    const { onPressEnter, onPressExit } = this.props;
    if(event.keyCode === 27){
      onPressExit();
    }
    if(event.keyCode === 13){
      onPressEnter();
    }
  }
}

export { TodoHeader };
