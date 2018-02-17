import {GET_DATA} from './ActionType';
import Constant from '../ApiCall/ApiConst'
import {CallApi} from '../ApiCall/apiCall';
import _ from 'lodash';
import { AsyncStorage } from 'react-native';

export const EmpAction = ()  =>{

    return (dispatch, getState) => {

        return CallApi(Constant.BASE_URL+Constant.select,'get',{},{})
            .then((response)=>{
                console.log("response get -> " + Constant.BASE_URL+Constant.select);

                dispatch({
                    type: GET_DATA,
                    payload: response.data
                });

                return Promise.resolve(response.data);

            })
            .catch((error)=>{
                console.log("error get -> " + Constant.BASE_URL+Constant.select);
                return Promise.reject(error);
            })
    };

};