import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    Alert
  } from 'react-native';
import { alignContent, paddingTop } from 'styled-system';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Icon } from 'react-native-elements';

const ShiftLists = ({data,navigation}) => {

    return (
        <View style={{marginBottom: 120,marginTop: 15}}>
           <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  // Alert.alert(`Name - ${item.facility_id}`);
                  navigation.navigate('Request',{
                    date: item.schedule_date,
                    schedID: item.schedule_id,
                    facID: item.fk_facility_id,
                    schedStatus: item.schedule_status
                  })
                  
                }}
              >
                <View
                  style={jewelStyle(item.schedule_status)}
                >
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 32,
                    }}
                  >
                    {item.time_start_standard} - {item.time_end_standard}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            renderHiddenItem={({item}) => (
              <View style={styles.rowBack}>
                <View
                  style={{
                    width: 75,
                    height: '100%',
                    marginVertical: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert('User Info', 'SwipeList Left Button');
                    }}
                  >
                    <Icon
                      name='info-circle'
                      type='font-awesome'
                      color='#333'
                      size={28}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: 75,
                    height: '100%',
                    marginVertical: 4,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert('Add User', 'SwipeList Right Button');
                    }}
                  >
                    <Icon
                      name='user-plus'
                      type='font-awesome'
                      color='#333'
                      size={28}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            leftOpenValue={100}
            rightOpenValue={-100}
          />
        </View>
      )
}

jewelStyle = function(status) {
  if(status == 2){
    return {
      backgroundColor: 'red',
      paddingVertical: 10,
      marginVertical: 4,
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '80%',
      marginLeft: '10%'
    }
  }else{
    return {
      backgroundColor: '#f1f3f6',
      paddingVertical: 10,
      marginVertical: 4,
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '80%',
      marginLeft: '10%'
    }
  }
  
}

const styles = StyleSheet.create({

    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
});

export default ShiftLists;