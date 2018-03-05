import React ,{Component} from 'react';
import {View,Alert,TouchableOpacity,Text,AppRegistry} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { EmpAction } from '../Actions/getEmpAction';
import {DeleteEmpAction} from "../Actions/DeleteEmpAction";
import { NavigationActions } from 'react-navigation'

import {responsiveHeight,responsiveWidth,responsiveFontSize} from 'react-native-responsive-dimensions';

class GetEmpDetails extends Component{
    constructor(props){

        super(props);
        this.state = {

            select:props.select,
            id:props.id,
        }
    }

    componentDidMount(){

        const { dispatch } = this.props
        this.props.onEmpAction();


    }


    componentWillReceiveProps(nextProps){



        console.log(nextProps);
    }
    onButtonClick(id){

        this.props.onDeleteEmpAction(id);




      console.log("Delete For Id " + id);

    }
    onUpdateButtonClick(data){



            // AsyncStorage.setItem('token',nextProps.token);
        this.props.navigation.navigate('UpdatePage',{data})

    }
    shouldComponentUpdate(nextProps,nextState){

        return true;

    }
    render()
    {

      /*  console.log('PROPS',this.props)*/
        // console.log(this.props.actions.EmpAction);
        // Alert.alert("Display Dsata"+this.props.actions.EmpAction);

            return (

                this.props.select.map((data,key) => {

                    return(

                        <View key={key}>
                            <Text style={{paddingTop:responsiveHeight(3)}}>
                                {data._id}
                            </Text>
                            <Text style={{paddingTop:responsiveHeight(3)}}>
                                {data.EmpName}
                            </Text>
                            <Text style={{paddingTop:responsiveHeight(3)}}>
                                {data.EmpSalary}
                            </Text>
                            <Text style={{paddingTop:responsiveHeight(3)}}>
                                {data.EmpDesignation}
                            </Text>

                            <View>

                                <TouchableOpacity style={{borderRadius: 3,
                                    marginTop: '2%',
                                    height:'10%',
                                    width:'50%',
                                    marginLeft:'25%',
                                    justifyContent:'center',
                                    backgroundColor:'#65C912'}}
                                                  onPress={() => {this.onButtonClick(data._id)}}
                                >

                                    <Text style={{textAlign:'center',
                                        fontSize:15,
                                        color:'#040604'}}>
                                        DELETE
                                    </Text>

                                </TouchableOpacity>
                            </View>
                                <View>
                                <TouchableOpacity style={{borderRadius: 3,
                                    marginTop: '2%',
                                    height:'10%',
                                    width:'50%',
                                    marginLeft:'25%',
                                    justifyContent:'center',
                                    backgroundColor:'#65C912'}}
                                                  onPress={() => this.onUpdateButtonClick(data)}
                                >

                                    <Text style={{textAlign:'center',
                                        fontSize:15,
                                        color:'#040604'}}>
                                        UPDATE
                                    </Text>

                                </TouchableOpacity>
                                </View>



                        </View>
                    )
                })
            )

    }

}
const mapStateToProps=state=>{


    return {
       select:state.GetEmp.select,
        id:state.DeleteEmp.id,
    };

}

function mapDispatchToProps(dispatch) {

    return {
        onEmpAction: (props) => {
            dispatch(EmpAction());

        },
        onDeleteEmpAction:(props) =>{
        dispatch(DeleteEmpAction(props));

        },
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetEmpDetails);
