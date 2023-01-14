import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
       <Text style={styles.box1}>box 1</Text>
       <Text style={styles.box2}>box 2</Text>
       <Text style={styles.box3}>box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        // flexWrap: 'wrap',
    },
    box1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    box2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    box3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
});
