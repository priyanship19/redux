import {DELETE_ONE_DATA} from '../Actions/ActionType';

const INITIAL_STATE =
    {


        id:0,
        status:0
    };

export default (state=INITIAL_STATE,action) => {
    switch(action.type){


        case DELETE_ONE_DATA:{

            return{

                ...state,
                id:action.payload,
                status:action.status

            }
        }
        default:{
            return state;

        }
    }


}