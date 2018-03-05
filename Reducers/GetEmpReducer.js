import {GET_DATA} from '../Actions/ActionType';

const INITIAL_STATE =
{

    select:[],
    id:0,
    status:0
};

export default (state=INITIAL_STATE,action) => {
    switch(action.type){

        case GET_DATA :{
            return {
                ...state,
              select:action.payload
            }
        }

         default:{
            return state;

        }
    }


}