import {GET_DATA} from '../Actions/ActionType';

const INITIAL_STATE = {

    DisplayData:[]
};

export default (state=INITIAL_STATE,action) => {

    switch(action.types){


        case GET_DATA :{
            console.log('DisplayData',action.payload);
            return {

                ...state,
                DisplayData : action.payload,
            }
        }

         default:{
            return state;

        }
    }


}