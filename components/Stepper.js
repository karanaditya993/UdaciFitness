import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { white, gray, purple } from '../utils/colors'

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iosButton: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    androidButton: {
        margin: 5,
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default function UdaciStepper ({ max, unit, step, value, onIncrement, onDecrement }) {
    return (
        <View style={[styles.row, { 'justifyContent': 'space-between' }]}>
            {Platform.OS === 'ios' ? (
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={onDecrement} style={[styles.iosButton, { borderTopRightRadius: 0, borderBottomRightRadius: 0 }]}>
                        <Entypo name='minus' size={30} color={purple}></Entypo>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onIncrement} style={[styles.iosButton, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }]}>
                        <Entypo name='plus' size={30} color={purple}></Entypo>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={onDecrement} style={[styles.androidButton, { borderTopRightRadius: 0, borderBottomRightRadius: 0 }]}>
                        <FontAwesome name='minus' size={30} color={white}></FontAwesome>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onIncrement} style={[styles.androidButton, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }]}>
                        <FontAwesome name='plus' size={30} color={white}></FontAwesome>
                    </TouchableOpacity>
                </View>
            )}
            <View style={styles.metricCounter}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
                <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
            </View>
        </View>
    );
}
