
import * as React from 'react';

class TodoItem extends React.Component<any,any> {

//   public state : ITodoItemState;

  constructor(props: any){
    super(props);
    // this.state = { editText: this.props.todo.title };
  }

  public placeholder (a?:any) {
    // console.warn('ok')
  }

  public render() {
    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={false}
            onChange={this.placeholder}
          />
          <label onDoubleClick={this.placeholder}>
            {'this.props.todo.title'}
          </label>
          <button className="destroy" onClick={this.placeholder} />
        </div>
        <input
          ref={(v)=>{this.placeholder(v)}}
          className="edit"
          value={'hello'}
        //   onBlur={ e => this.handleSubmit(e) }
        //   onChange={ e => this.handleChange(e) }
        //   onKeyDown={ e => this.handleKeyDown(e) }
        />
      </li>
    );
  }
}

export {TodoItem};
