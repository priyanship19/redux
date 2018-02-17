import {SAVE_SUCCESS} from '../Actions/ActionType'
const INITIAL_STATE ={

    SavesData:{}
};
export default(state=INITIAL_STATE,action)=>
{
    switch(action.type)
    {

        case SAVE_SUCCESS:
            {
            return{
                ...state,
                SavesData:action.payload
            }
        }
         default:{
             return state
          }
    }
}
