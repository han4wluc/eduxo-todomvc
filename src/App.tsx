
import * as React from 'react';
import { Provider } from 'react-redux'
import { TodoFooter } from './components/TodoFooter';
import TodoBody from './connectors/todoBodyConnector';
// import { TodoHeader } from './components/TodoHeader';
import TodoHeader from './connectors/todoHeaderConnector';

import app from './models/app';


class App extends React.Component {
  public render() {
    return (
      <Provider store={app.getStore()}>
        <div>
          <TodoHeader/>
          <TodoBody/>
          <TodoFooter/>
        </div>
      </Provider>
    );
  }
}

export default App;
