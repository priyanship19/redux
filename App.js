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

class App extends Component{

  render()
  {
      /*const store = createStore(AppReducer, compose(applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : f => f
      ));*/
    return(

        <View>
        <Provider store={(createStore(AppReducer, compose(applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : f => f
        )))}>
     <GetEmp/>
        </Provider>
        </View>


    )


  }
}
export default App;


