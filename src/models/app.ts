

import Eduxo from './Eduxo';
import todoModel, * as todoModelTypes from './todoModel';

export interface IDispatchers {
  todo: todoModelTypes.IDispatchers,
}

const app = new Eduxo<IDispatchers>();

app.require(todoModel)
app.init();

export default app;

