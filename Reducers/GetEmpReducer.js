import {GET_DATA} from '../Actions/ActionType';

const INITIAL_STATE =
{

    select:[]
};

export default (state=INITIAL_STATE,action) => {
    switch(action.type){

        case GET_DATA :{
            debugger;
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