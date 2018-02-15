import React ,{Component} from 'react';
import {View} from 'react-native';
import RegisterComponent from './Component/RegisterComponent';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppReducer from './Reducers/index'
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import GetEmp from './Component/GetEmpDetails';

class App extends Component{

  render()
  {

      //applyMiddleware(thunk))(createStore)
    return(

        <View>
        <Provider store={createStore(AppReducer,composeWithDevTools(applyMiddleware(ReduxPromise)))}>
            <GetEmp/>
        </Provider>
        </View>


    )


  }
}
export default App;