import {UPDATE_ONE_DATA} from "./ActionType";
import Constant from '../ApiCall/ApiConst';
import {CallApi} from "../ApiCall/apiCall";

export const UpdateEmpAction = (id,data) => {

    return (dispatch,getState) => {
        return CallApi(Constant.BASE_URL + Constant.updateOne + "?id=" + id,'put',data).then((response) => {


            console.log(Constant.BASE_URL+Constant.updateOne);

            dispatch({

                type:UPDATE_ONE_DATA,
                payload:response.data,
                status:response.status

            })

            return Promise.resolve(response.data);


        })
            .catch((error) => {

            return Promise.reject(error);

            })

    }

}