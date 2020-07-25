import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default function UdaciSlider ({ max, min, unit, step, value, onChange }) {
    return (
        <View style={styles.row}>
            <Slider
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={min}
                onValueChange={onChange}
                style={{flex: 1}}
            ></Slider>
            <View style={styles.metricCounter}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
                <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
            </View>
        </View>
    );
}
