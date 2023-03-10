import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform, View } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                onPress={onPress}
                style={[styles.fab, styles.fabLocation, (position === 'bl') ? styles.left : styles.right]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
      );
    };

    const android = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                onPress={onPress}
                style={[styles.fab, styles.fabLocation, (position === 'bl') ? styles.left : styles.right]}
            >
                {/* <View style={styles.fab}> */}
                    <Text style={styles.fabText}>{title}</Text>
                {/* </View> */}
            </TouchableOpacity>
      );
    };

    return (Platform.OS === 'ios') ? ios() : android();
};


const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        // alignSelf: 'center',
    },
});
