import {combineReducers} from 'redux';
import EmpReducer from './EmpReducer';
import GetEmpReducer from './GetEmpReducer';
import DeleteEmpReducer from './DeleteEmpReducer';
import UpdateReducer from './updateEmpReducer';

const AppReducer = combineReducers({
    Emp:EmpReducer,
    GetEmp : GetEmpReducer,
    DeleteEmp : DeleteEmpReducer,
    UpdateEmp : UpdateReducer
});
export default AppReducer;