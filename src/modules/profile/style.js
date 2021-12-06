import {StyleSheet, Platform} from 'react-native';
import {BODY} from 'theme';

export const styles = StyleSheet.create({
    Thumbnail :{ marginTop: 20, alignSelf: 'center',width:120,height:120,borderRadius:60 },
    Button  : { width: '93%', alignSelf: "center", margin: 15, justifyContent: 'center', borderWidth: 2, borderColor: "#000", backgroundColor: BODY.LIGHT_COLOR, borderRadius: 5 },
    Item  : { marginBottom: 10,backgroundColor: '#fff',borderColor:'#000',borderBottomWidth: 2, borderTopWidth: 2, borderLeftWidth: 2,borderRightWidth: 2, height:37,borderRadius:5},
    errorCont:{ borderRadius: 5, padding: 10, justifyContent: 'center', alignItems: 'center',width:'90%',alignSelf:"center",flexDirection:'column' },
    container: {
        flex: 1,
      },
    cardContainer: {
      backgroundColor: '#FFF',
      borderWidth: 0,
      flex: 1,
      margin: 0,
      padding: 0,
    },
      button: {
        backgroundColor: 'blue',
        marginBottom: 10,
      },
      text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      },
      pickerOption: {
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
      },
    
      optionsWrapper: {
        paddingHorizontal: 20,
      },
    
      text: {
        paddingLeft: 17,
      },
      marginTop: {
        marginTop: 20,
      },
      headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 45,
      },
      headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
          ios: {
            alignItems: 'center',
            elevation: 1,
            marginTop: -1,
          },
          android: {
            alignItems: 'center',
          },
        }),
      },
      userImage: {
        borderColor: '#FFF',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
      },
      userNameText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
      },
      userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
      },
      userCityRow: {
        backgroundColor: 'transparent',
        width:'80%',
      },
      userCityText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
      },
      telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
      },
      SubContainers: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginBottom: 30,
      },
      SubIconRow: {
        flex: 2,
        justifyContent: 'center',
      },
      SubRows: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      SubNumberColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
      },
      SubNumberText: {
        fontSize: 16,
      },
      SubIcons: {
        color: 'gray',
        fontSize: 30,
      },
      placeIcon: {
        color: 'white',
        fontSize: 26,
      },
      seperatorContainer: {
        flexDirection: 'row',
      },
      separatorOffset: {
        flex: 0,
        flexDirection: 'row',
      },
      separator: {
        borderColor: '#EDEDED',
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
      },
});