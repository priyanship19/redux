import React,{Component} from 'react';
import {View,TouchableOpacity,Text,Alert} from 'react-native';
import {Input}  from "./Common/Input";
import {connect,bindActionCreators} from 'react-redux';
import {UpdateEmpAction} from "../Actions/updateEmpAction";
import {NavigationActions} from 'react-navigation';


class UpdateDetails extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            EmpName :this.props.navigation.state.params.data.EmpName,
            EmpSalary:this.props.navigation.state.params.data.EmpSalary,
            EmpDesignation:this.props.navigation.state.params.data.EmpDesignation
        }


    }
    componentDidMount(){

    }
    onButtonClick() {
        /*this.props.UpdateEmpAction(this.props.navigation.state.params.data.id);

        console.log("Get ID" + this.props.navigation.state.params.data.id);*/

        this.props.UpdateEmpAction(this.props.navigation.state.params.data._id,{
            EmpName: this.state.EmpName,
            EmpSalary: this.state.EmpSalary,
            EmpDesignation: this.state.EmpDesignation
        })
    }


        componentWillReceiveProps(nextProps)
        {

            var res = nextProps.status;
            console.log("Status" + res);
            if(this.state.EmpName===''&&this.state.EmpSalary===''&& this.state.EmpDesignation==='')
            {

                Alert.alert("You Are Not Navigate TO Another Page");
            }
            else if(res === 200)
            {

                this.props.navigation.dispatch(NavigationActions.reset({

                    index:0,
                    actions : [

                        NavigationActions.navigate({routeName:'Display'})
                    ]
                }))
            }

        }

    render(){

        return(

            <View>


                <Input
                    label={'EmployeeName : '}
                    value={this.state.EmpName}
                    onChangeText={(text) => this.setState({EmpName:text})}
                >
                </Input>
                <Input
                    label={'EmployeeSalary:'}
                    value={this.state.EmpSalary.toString()}
                    onChangeText={(text) => this.setState({EmpSalary:text})}
                >
                </Input>
                <Input
                    label={'EmployeeDesignation:'}
                    value={this.state.EmpDesignation}
                    onChangeText={(text) => this.setState({EmpDesignation:text})}
                >
                </Input>

                {/*  <Button onPress={() => this.onButtonClick.bind(this)} />*/}
                <TouchableOpacity style={{borderRadius: 3,
                    marginTop: '2%',
                    height:'10%',
                    width:'50%',
                    marginLeft:'25%'
                    ,          justifyContent:'center'
                    ,         backgroundColor:'#65C912'}}
                                  onPress={() => {this.onButtonClick()}}
                >

                    <Text style={{textAlign:'center',
                        fontSize:20,
                        color:'#040604'}}>
                        UPDATE DETAILS
                    </Text>

                </TouchableOpacity>


            </View>

        );

    }

}
const mapStateToProps = state => {
    return{

        updateData:state.UpdateEmp.updateData,
        status:state.UpdateEmp.status
    }

}
export default connect(mapStateToProps,{UpdateEmpAction})(UpdateDetails);