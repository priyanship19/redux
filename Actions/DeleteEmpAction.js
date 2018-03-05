import {DELETE_ONE_DATA} from './ActionType';
import Constant from '../ApiCall/ApiConst'
import {CallApi} from '../ApiCall/apiCall';


export const DeleteEmpAction = (props) => {


    return (dispatch,getState) => {


        return CallApi(Constant.BASE_URL +Constant.deleteOne + "?id=" + props,'delete').then((response) => {

                console.log("response get->" + Constant.BASE_URL + Constant.deleteOne);

                dispatch({

                    type:DELETE_ONE_DATA,
                    payload:response.data,
                    status:response.status

                })
                console.log(response);
                return Promise.resolve(response);
            })
            .catch((error) => {

                return Promise.reject(error);
            })
    }


}