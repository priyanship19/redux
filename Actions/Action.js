import {SAVE_SUCCESS} from './ActionType';
import Constant from '../ApiCall/ApiConst'
import {CallApi} from '../ApiCall/apiCall';


export const CreateUser=(data)=>{

    return(dispatch,getState)=> {
        return CallApi(Constant.BASE_URL + Constant.insert, 'post',data, {})
            .then((response) => {

                console.log("response -> ", Constant.BASE_URL + Constant.insert);


                dispatch({
                    type: SAVE_SUCCESS,
                    payload: response.data,
                    status:response.status
                });

                return Promise.resolve(response.data);
            })
            .catch((error) => {
                console.log("error -> " + Constant.BASE_URL + Constant.insert);
            })
    };
}






