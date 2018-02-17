import {SAVE_SUCCESS} from './ActionType';
import Constant from '../ApiCall/ApiConst'
import {CallApi} from '../ApiCall/apiCall';


export const CreateUser=(EmpName,EmpSalary,EmpDesignation)=>{

    return(dispatch,getState)=> {
        return CallApi(Constant.BASE_URL + Constant.insert, 'post', {
            EmpName: EmpName,
            EmpSalary: EmpSalary,
            EmpDesignation: EmpDesignation
        }, {})
            .then((response) => {

                console.log("response -> ", Constant.BASE_URL + Constant.insert);


                dispatch({
                    type: SAVE_SUCCESS,
                    payload: response.data
                });

                return Promise.resolve(response.data);
            })
            .catch((error) => {
                console.log("error -> " + Constant.BASE_URL + Constant.insert);
            })
    };
}






