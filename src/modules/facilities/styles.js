import {StyleSheet} from 'react-native';
import { borderStyle, marginBottom, marginLeft } from 'styled-system';
import {BODY,CONTAINER} from 'theme';

export const styles = StyleSheet.create({
    header:{
        height: '10%',
    },
    container: {
        
      },
    H1: {
        textAlign: 'left',
        textAlignVertical: "center",
        fontSize: 20,
        color: '#000',
    },
    test2: {
        color: 'red',
    },
    headline: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 0,
        width: 200,
        backgroundColor: 'yellow',
    },

    shadowProp: {
        shadowColor: 'red',
        shadowOffset: {width: -2, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    // facList:{
    //     borderWidth: 1,
    //     backgroundColor: "beige",
    //     marginLeft: 20,
    //     marginRight: 20,
    //     flex: 1,
    //     height: 100,

    // },
    // input: {
    //     flex: 1,
    //     padding: 0,
    //     paddingHorizontal: 15,
    //     fontSize: 15,
    // },
});