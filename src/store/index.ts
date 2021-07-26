import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers'

// const storageConfig = {
//   key: 'root', // 必须有的
//   storage:storage, // 缓存机制
//   // whitelist: ['userId','userInfoId','loginName'] // reducer 里持久化的数据,除此外均为不持久化数据
// }
// const myPersistReducer = persistReducer(storageConfig, rootReducer);

const composeEnhancers =
  typeof window === 'object' &&
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?   
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
)
// const store = createStore(
//   myPersistReducer,
//   enhancer
// )
// export const persistor = persistStore(store);
const store = createStore(
  rootReducer,
  enhancer
)


export default store
