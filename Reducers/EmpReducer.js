import {SAVE_SUCCESS} from '../Actions/ActionType'
const INITIAL_STATE ={

    SavesData:{},
    status:0
};
export default(state=INITIAL_STATE,action)=>
{
    switch(action.type)
    {

        case SAVE_SUCCESS:
            {
            return{
                ...state,
                SavesData:action.payload,
                status:action.status
            }
        }
         default:{
             return state
          }
    }
}
