import React from 'react';
import {StackNavigator} from 'react-navigation';
import EmployeeDisplay from './GetEmpDetails';
import EmployeeInsert from './RegisterComponent';
import EmployeeUpdate from './UpdateDetails';

export default  RootNavigator = StackNavigator({


    Insert:{
        screen:EmployeeInsert,
        navigationOptions:{
            header:null
        },

    },
    Display:{
        screen:EmployeeDisplay,
        navigationOptions:{
            headerTitle: 'Employee Display'
        },
    },
   UpdatePage:{
        screen:EmployeeUpdate,
       navigationOptions:{
           headerTitle: 'Employee Update'
       },

    },

},{
    navigationOptions:{
        initialPage:'Display'
    }
});
