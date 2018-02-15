import React ,{Component} from 'react';
import {View,Alert,TouchableOpacity,Text} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EmpAction from '../Actions/getEmpAction';

class GetEmpDetails extends Component{
    constructor(props){

        super(props);
    }

    componentDidMount(){

        const { dispatch } = this.props
        this.props.actions.EmpAction();
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    render()
    {

        console.log('PROPS',this.props)
        console.log(this.props.actions.EmpAction);
        return(

            <View>

                <Text>Hi</Text>
            </View>
        );
    }

}
const mapStateToProps=state=>{
    debugger;
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(EmpAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetEmpDetails);
