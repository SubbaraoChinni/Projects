import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './App';
import './index.css';

const middleWare = [ thunk ]
if(process.env.NODE_NEW !== 'production'){
  middleWare.push(createLogger())
}
 const store = createStore(
   reducer,
   applyMiddleware(...middleWare)
 )

 render(
   <Provider store = {store}>
     <App/>
   </Provider>,
   document.getElementById('root')
 )

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
