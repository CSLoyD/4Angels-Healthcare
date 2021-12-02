import React from 'react';
import { Thumbnail, View } from 'native-base';
import { connect, useDispatch } from 'react-redux';
import { Text } from 'components';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const Registration = (props) => {
    return (
      <View style={wow.container}>
          <View style={wow.header}></View>
          <Image style={wow.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={wow.body}>
            <View style={wow.bodyContent}>
              <Text style={wow.name}>John Doe</Text>
              <Text style={wow.info}>UX Designer / Mobile developer</Text>
              <Text style={wow.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              <Text center>Test</Text>
              {/* <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity> */}
            </View>
        </View>
      </View>
    );
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
    }
}

export default connect(
    mapStateToProps,
    null
)(Registration)

const wow = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});

                                            