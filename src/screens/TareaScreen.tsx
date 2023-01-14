import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.purpleBox}/>
        <View style={styles.orangeBox}/>
        <View style={styles.blueBox}/>
    </View>
  );
};

const styles = StyleSheet.create({
    // *1
    // container: {
    //     flex: 1,
    //     backgroundColor: '#28425B',
    // },
    // purpleBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#5856D6',
    // },
    // orangeBox: {
    //     flex: 1,
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#F0A23B',
    // },
    // blueBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#28C4D9',
    // },
    // *2
    // container: {
    //     flex: 1,
    //     backgroundColor: '#28425B',
    //     justifyContent: 'center',
    // },
    // purpleBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#5856D6',
    // },
    // orangeBox: {
    //     // flex: 1,
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#F0A23B',
    // },
    // blueBox: {
    //     width: '100%',
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#28C4D9',
    // },
    // *3
    // container: {
    //     flex: 1,
    //     backgroundColor: '#28425B',
    //     justifyContent: 'center',
    // },
    // purpleBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#5856D6',
    //     alignSelf: 'flex-end',
    // },
    // orangeBox: {
    //     // flex: 1,
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#F0A23B',
    // },
    // blueBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#28C4D9',
    //     alignSelf: 'center',
    // },
    // *4
    // container: {
    //     flex: 1,
    //     backgroundColor: '#28425B',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    // },
    // purpleBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#5856D6',
    //     alignSelf: 'flex-end',
    // },
    // orangeBox: {
    //     // flex: 1,
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#F0A23B',
    // },
    // blueBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#28C4D9',
    //     alignSelf: 'flex-start',
    // },
    // *5
    // container: {
    //     flex: 1,
    //     backgroundColor: '#28425B',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    // purpleBox: {
    //     width: 100,
    //     height: '100%',
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#5856D6',
    // },
    // orangeBox: {
    //     // flex: 1,
    //     width: 100,
    //     height: '100%',
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#F0A23B',
    // },
    // blueBox: {
    //     width: 100,
    //     height: '100%',
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#28C4D9',
    // },
    // *6
    // container: {
    //     flex: 1,
    //     backgroundColor: '#28425B',
    // },
    // purpleBox: {
    //     flex: 1,
    //     width: '100%',
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#5856D6',
    // },
    // orangeBox: {
    //     flex: 1,
    //     width: '100%',
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#F0A23B',
    // },
    // blueBox: {
    //     flex: 2,
    //     width: '100%',
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#28C4D9',
    // },
    // *7
    // container: {
    //     flex: 1,
    //     backgroundColor: '#28425B',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // purpleBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#5856D6',
    // },
    // orangeBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#F0A23B',
    // },
    // blueBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#28C4D9',
    // },
    // *8
    // container: {
    //     flex: 1,
    //     backgroundColor: '#28425B',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // purpleBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#5856D6',
    // },
    // orangeBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     left: 100,
    //     borderColor: 'white',
    //     backgroundColor: '#F0A23B',
    // },
    // blueBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#28C4D9',
    // },
    // *9
    // container: {
    //     flex: 1,
    //     backgroundColor: '#28425B',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // purpleBox: {
    //     width: 100,
    //     height: 100,
    //     top: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#5856D6',
    // },
    // orangeBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     left: 100,
    //     borderColor: 'white',
    //     backgroundColor: '#F0A23B',
    // },
    // blueBox: {
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     backgroundColor: '#28C4D9',
    // },
    // *10
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    purpleBox: {
        width: 100,
        height: 100,
        // top: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    orangeBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        top: 50,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    blueBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },
});
