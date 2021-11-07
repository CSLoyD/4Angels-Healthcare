import {StyleSheet} from 'react-native';
import {BODY} from 'theme';

export const styles = StyleSheet.create({
    Thumbnail :{ alignSelf: 'center',width:120,height:120,borderRadius:60 },
    Button  : { borderRadius: 15 ,width: 330, marginLeft: 20, height:65, alignSelf: "center", margin: 15, justifyContent: 'center', borderWidth: 2, borderColor: "#000", backgroundColor: BODY.LIGHT_COLOR },
    Button2  : { width: '93%', alignSelf: "center", margin: 15, justifyContent: 'center' },
    Item  : { marginBottom: 10,borderBottomWidth: 2, borderTopWidth: 2, borderLeftWidth: 2,borderRightWidth: 2, width: 330, marginLeft: 20, height:65,borderRadius:15, borderColor: 'rgba(158, 150, 150, .5)'},
    logo  : {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 130,
        aspectRatio: 5 / 3.50,
        width: "30%",
        marginTop: 50
    },
    errorCont:{ borderRadius: 5, padding: 10, justifyContent: 'center', alignItems: 'center',width:'90%',alignSelf:"center"}
});