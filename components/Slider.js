import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdaciSlider ({ max, min, unit, step, value, onChange }) {
    return (
        <View>
            <Slider
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={min}
                onValueChange={onChange}
            ></Slider>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    );
}
