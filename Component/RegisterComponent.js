import React ,{Component} from 'react';
import {View,Alert,TouchableOpacity,Text,TextInput} from 'react-native';
import {Button,Input,Header,Card} from "./Common";
import {CreateUser} from "../Actions/Action";
import {connect,bindActionCreators} from 'react-redux';
import { NavigationActions } from 'react-navigation'
import {responsiveHeight,responsiveWidth,responsiveFontSize} from 'react-native-responsive-dimensions';
import axios from 'axios';

class RegisterComponent extends Component{
    constructor(props)
    {
        super(props);
this.state={
    EmpName :'',
    EmpDesignation:'',
    EmpSalary:''
}

    }


    onButtonClick(){
        this.props.CreateUser({

            EmpName:this.state.EmpName,
            EmpSalary:this.state.EmpSalary,
            EmpDesignation:this.state.EmpDesignation
        })



    /*  if(this.state.EmpName===''&& this.state.EmpDesignation===''&& this.state.EmpSalary==='' )
      {
          alert("Please fill the details")
      }
      else{

          this.props.CreateUser(this.state.EmpName,this.state.EmpSalary,this.state.EmpDesignation).then((res)=>{
              console.log(res);

              Alert.alert("userCreated");
          }).catch((err)=>{
              console.log('error', err);

              Alert.alert('error');
          })
      }*/
    }
    componentWillReceiveProps(nextProps){

        var res = nextProps.status;
        console.log("Status" + res);

        if(this.state.EmpName===''&& this.state.EmpDesignation===''&& this.state.EmpSalary==='')
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
    render()
    {

      //  const {navigate} = this.props.navigation;
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
                            Insert Employee
                        </Text>

                    </TouchableOpacity>


                        <TouchableOpacity style={{borderRadius: 3,
                            marginTop: '2%',
                            height:'10%',
                            width:'50%',
                            marginLeft:'25%'
                            ,          justifyContent:'center'
                            ,         backgroundColor:'#65C912'}}
                                          onPress={() => {this.props.navigation.navigate('Display')}}
                        >

                            <Text style={{textAlign:'center',
                                fontSize:20,
                                color:'#040604'}}>
                                Display Employee
                            </Text>

                        </TouchableOpacity>

                </View>




        );
    }
}
const mapStateToProps=state=>{
    console.log(state);
    return{
       SavesData:state.Emp.SavesData,
        status:state.Emp.status
    }
};
/*
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CreateUser, dispatch),

    }
}
*/

//export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);

export default connect(mapStateToProps,{
    CreateUser
})(RegisterComponent);
