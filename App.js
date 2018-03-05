import React ,{Component} from 'react';
import {View} from 'react-native';
import RegisterComponent from './Component/RegisterComponent';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppReducer from './Reducers/index'
import { createStore, applyMiddleware,compose } from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import GetEmp from './Component/GetEmpDetails';
import RootNavigator from './Component/StackNavigation';
import UpdateEmp from './Component/UpdateDetails';

class App extends Component{


  render()
  {

      /*const store = createStore(AppReducer, compose(applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : f => f
      ));*/
    return(
        <Provider store={(createStore(AppReducer,applyMiddleware(thunk)))}>
                <RootNavigator/>
        </Provider>
    )


  }
}
export default App;


