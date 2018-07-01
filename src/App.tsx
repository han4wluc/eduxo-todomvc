
import * as React from 'react';
import { Provider } from 'react-redux'
// import { TodoFooter } from './components/TodoFooter';
import TodoBody from './connectors/todoBodyConnector';
import TodoFooter from './connectors/todoFooterConnector';
import TodoHeader from './connectors/todoHeaderConnector';

import app from './models/app';

declare var Router : any;

// tslint:disable-next-line:no-var-requires
// const director = require('director') 
// const { createLogicMiddleware, createLogic } = reduxLogic;

class App extends React.Component {

  public componentDidMount() {
    // director.
    // Router()
    // app.getStore(app.getStore(
      // app.getDispatcher().todo
    const router = Router({
      '/':()=>app.getDispatcher().todo.setDisplayMode('all'),
      '/active': ()=>app.getDispatcher().todo.setDisplayMode('active') ,
      '/completed': ()=>app.getDispatcher().todo.setDisplayMode('completed'),
    });
    router.init('/');
  }

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
