import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import createRootReducer from 'reducers';

export const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
const rootReducer = createRootReducer(history);

export type RootState = ReturnType<typeof rootReducer>;
export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  ),
);
