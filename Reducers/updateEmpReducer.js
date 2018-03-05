import {UPDATE_ONE_DATA} from "../Actions/ActionType";


const INITIAL_STATE = {



    updateData : [],
    status:0
}

export default (state=INITIAL_STATE,action) => {

    switch(action.type){
        case UPDATE_ONE_DATA:{

            return {

                ...state,
                updateData:action.payload,
                status:action.status
            }

        }

        default:{

            return state
        }
    }



}